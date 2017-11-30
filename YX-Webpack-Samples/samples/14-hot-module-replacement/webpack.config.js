var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			'./src/index.js'
	],
	output: {
		filename: './dist/bundle.js'
	},
	plugins: [
			new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			},
			include: path.join(__dirname, '.')
		}]
	},
	node: {
		fs: 'empty'
	}
};