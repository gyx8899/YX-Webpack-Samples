module.exports = {
	entry: {
		bundle1: './src/index1.js',
		bundle2: './src/index2.js'
	},
	output: {
		filename: './dist/[name].js'
	}
};