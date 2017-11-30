var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	plugins: [
			new uglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
	]
};