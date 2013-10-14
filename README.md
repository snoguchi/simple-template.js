simple-template.js
==================
Minimal Javascript templating.

Example
-------
```javascript
// uncomment the below line if use in node.js
// var compileTemplate = require('simple-template-js');

var text = '<ul><% data.forEach(function(i) { %><li><%=i%></li><% }); %></ul>';
var data = ['sloth', 'bear', 'monkey'];
var precompiledTemplate = compileTemplate(text);
var result = precompiledTemplate(data);
```

Setup
-----
```
npm install simple-template-js
```

Demo
----
https://rawgithub.com/snoguchi/simple-template.js/master/test/test.html

Benchmark
---------
http://jsperf.com/javascript-templating-shootoff-extended/73
