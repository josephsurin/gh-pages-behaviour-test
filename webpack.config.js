const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'app.bundle.js',
		publicPath: './',
	},
	module: {
		rules: [{
			test: /\.html$/,
			use: ['html-loader']
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}