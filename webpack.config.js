const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: ['react-hot-loader/patch', './src/index.tsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: './public/runner.svg',
			templateContent: `
				<html>
				<body>
					<div id="root"></div>
				</body>
				</html>
			`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	devServer: {
		contentBase: './dist',
	},
};

module.exports = config;
