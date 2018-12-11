const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src', 'index.js'),
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
		title: 'Herp Management'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
			chunkFilename: '[contenthash].css'
		}),
		// new BabelMinify({}),
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},

	module: {
		rules: [
		    {
		      test: /\.jsx$/,
		      exclude: /node_modules/,
		      use: {
		          loader: 'babel-loader',
		          options: {
		              presets: ['react', 'es2015']
		            }
		        }
			},
			{
			    test: /\.(s*)css$/,
			    use: [
		          'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
			    ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};