const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinify = require('babel-minify-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin({}),
			new BabelMinify({}),
		],
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(s*)css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	mode: 'production',
});