var CommonChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		bundle1: './src/main1.jsx',
		bundle2: './src/main2.jsx'
	},
	output: {
		filename: './dist/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
		]
	},
	plugins: [
			new CommonChunkPlugin('init.js')
	]
};