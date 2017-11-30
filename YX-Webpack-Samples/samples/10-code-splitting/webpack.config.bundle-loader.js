const path = require('path');

module.exports = {
	entry: './src/loader.js',
	output: {
		filename: 'bundle-loader.js',
		path: path.resolve(__dirname, 'dist')
	}
};