function compileTemplate(s) {
  var code = ['var out = "";'], token = s.split('%>');
  for (var i = 0, len = token.length; i < len; i++) {
    var tmp = token[i].split('<%');
    if (tmp[0]) {
      var literal = tmp[0].replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r').replace(/\"/g, '\\"');
      code.push('out+="' + literal + '";');
    }
    if (tmp[1]) {
      if (tmp[1].charAt(0) === '=') {
        code.push('out+=' + tmp[1].slice(1) + ';');
      } else {
        code.push(tmp[1]);
      }
    }
  }
  code.push('return out;');
  return new Function("data", code.join(''));
}

if (typeof module !== 'undefined') { module.exports = compileTemplate; }
