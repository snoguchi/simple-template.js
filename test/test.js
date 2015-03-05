var assert = require('assert'),
compileTemplate = require('../simple-template.js');

(function() {
  var text = '<ul><% data.forEach(function(animal){%><li><%= animal %></li><%});%></ul>';
  var data = ['sloth', 'bear', 'monkey'];
  var expected = '<ul><li>sloth</li><li>bear</li><li>monkey</li></ul>';
  var result = compileTemplate(text)(data);
  assert.strictEqual(result, expected);
})();

(function() {
  var text = '<%=arg1%>/<%=arg2%>';
  var expected = 'foo/bar';
  var result = compileTemplate(text, 'arg1,arg2')('foo', 'bar');
  assert.strictEqual(result, expected);
})();

console.log('ok');
