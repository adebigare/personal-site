const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Adrienne Debigare Portfolio',
            template: 'src/html/layout.pug',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'patterns.html',
            title: 'Adrienne Debigare Portfolio',
            template: 'src/html/patterns.pug',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        alias: {
            Images: path.resolve(__dirname, '/assets/images')
        }
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
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                        // root: path.resolve(__dirname, 'src/html')
                    }
                }]
            },
            {
               test: /\.(scss|css)$/,
               use: [
                   {
                       // creates style nodes from JS strings
                       loader: "style-loader",
                       options: {
                           sourceMap: true
                       }
                   },
                   {
                       // translates CSS into CommonJS
                       loader: "css-loader",
                       options: {
                           sourceMap: true
                       }
                   },
                   {
                       // compiles Sass to CSS
                       loader: "sass-loader",
                       options: {
                           outputStyle: 'expanded',
                           sourceMap: true,
                           sourceMapContents: true,
                           includePaths: [
                               require('bourbon-neat').includePaths
                           ]
                       }
                   }
                   // Please note we are not running postcss here
               ]
           },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
                ]
            }
        ]
    }
};