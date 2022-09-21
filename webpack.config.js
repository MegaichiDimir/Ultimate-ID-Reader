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
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
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
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]',
					},
				}],
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