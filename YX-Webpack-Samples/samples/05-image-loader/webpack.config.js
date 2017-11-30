module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: './[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(gif)$/,
				loader: 'file-loader'
			}
		]
	}
};