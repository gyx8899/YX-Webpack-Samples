require.ensure(['./a.js'], function (require) {
	var content = require('./a.js');

	// document.open();
	// document.write('<h1>' + content + '</h1>');
	// document.close();

	document.getElementById('demoHTML').innerHTML = document.getElementById('demoHTML').innerHTML + 'main.js: ' + content;
});