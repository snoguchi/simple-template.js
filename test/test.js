var assert = require('assert'),
compileTemplate = require('../simple-template.js');

(function() {
  var text = '<ul><% data.forEach(function(animal){%><li><%= animal %></li><%});%></ul>';
  var data = ['sloth', 'bear', 'monkey'];
  var expected = '<ul><li>sloth</li><li>bear</li><li>monkey</li></ul>';
  var result = compileTemplate(text)(data);
  assert.strictEqual(result, expected);
})();

console.log('ok');
