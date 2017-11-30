var load = require('bundle-loader!./a.js');

load(function (file) {
	console.log('1234543');
	document.getElementById('demoHTML').innerHTML = document.getElementById('demoHTML').innerHTML + 'Loader File: ' + file;
});