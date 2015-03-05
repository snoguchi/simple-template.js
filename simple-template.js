function compileTemplate(s, arg) {
  var code = 'var out = "";', token = s.split('%>');
  for (var i = 0, len = token.length; i < len; i++) {
    var tmp = token[i].split('<%');
    if (tmp[0]) {
      var literal = tmp[0].replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r').replace(/\"/g, '\\"');
      code += 'out+="' + literal + '";';
    }
    if (tmp[1]) {
      if (tmp[1].charAt(0) === '=') {
        code += 'out+=' + tmp[1].slice(1) + ';';
      } else {
        code += tmp[1];
      }
    }
  }
  code += 'return out;';
  return new Function(arg || 'data', code);
}

if (typeof module !== 'undefined') { module.exports = compileTemplate; }
