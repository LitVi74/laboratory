const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: path.resolve(__dirname, 'src') + '/index.ts',
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: 'bundle.js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			linkType: "text/css"
		}),
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				exclude: /node_modules/,
			},
		],
	},
}
