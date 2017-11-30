var webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"window.jQuery": 'jquery'
		})
	]
};