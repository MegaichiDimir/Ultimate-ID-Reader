const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{ 
				/* TypeScriptのモジュール */
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ['@babel/preset-env', '@babel/react'] },
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, 'tsconfig.json'),
						},
					},
				]
			},
			{ 
				/* CSSのモジュール */
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				]
			},
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3000,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	target: 'web',
	plugins: [
		new webpack.DefinePlugin({
			'process.browser': 'true'
		}),
	],
};