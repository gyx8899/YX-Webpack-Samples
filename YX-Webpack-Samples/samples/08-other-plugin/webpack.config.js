var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	plugins: [
			new htmlWebpackPlugin({
				title: '08-other-plugin',
				filename: './dist/index.html'
			}),
			new openBrowserPlugin({
				url: 'http://localhost:8080/dist'
			})
	]
};