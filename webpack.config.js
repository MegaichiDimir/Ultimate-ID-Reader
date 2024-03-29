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
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
			},
			{ 
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
				type: "asset/inline",
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