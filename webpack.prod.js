const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },
    node: {
        fs: 'empty'
    },
    optimization: {
        minimizer: [
          // new UglifyJsPlugin({
          //   cache: true,
          //   parallel: true,
          //   sourceMap: true // set to true if you want JS source maps
          // }),
          new OptimizeCssAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: false,
                        plugins: require('jstransformer')(require('jstransformer-markdown-it'),require('markdown-it-container'))
                    }
                }]
            },
            {
                test: /\.(scss|css|sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            // translates CSS into CommonJS
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // Runs compiled CSS through postcss for vendor prefixing
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // compiles Sass to CSS
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true,
                                sourceMapContents: true,
                                includePaths: [
                                    require('bourbon-neat').includePaths,
                                    require('@fortawesome/fontawesome-free').includePaths
                                ]
                            }
                        }
                    ],
            },
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                    // url-loader sets mimetype if it's passed.
                    // Without this it derives it from the file extension
                    mimetype: 'application/font-woff',
                    // Output below fonts directory
                    name: './fonts/[name].[ext]',
                },
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Adrienne Debigare Portfolio',
            template: 'src/html/layout.pug',
            inject: true,
            file: require('./src/assets/data/index.json'),
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'patterns.html',
        //     title: 'Adrienne Debigare Portfolio',
        //     template: 'src/html/patterns.pug',
        //     inject: true,
        //     data: {
        //       global: require('./src/assets/data/global.json')
        //     }
        // }),
        new HtmlWebpackPlugin({
            filename: 'data-swap.html',
            title: 'Adrienne Debigare Portfolio – Dataswap',
            template: 'src/html/layouts/content-project-dataswap.pug',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'open-knowledge.html',
            title: 'Adrienne Debigare Portfolio – Open Knowledge',
            template: 'src/html/layouts/content-project-OpenKnowledge.pug',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'coming-soon.html',
            title: 'Adrienne Debigare Portfolio – Coming Soon',
            template: 'src/html/layouts/content-coming-soon.pug',
            inject: true
        }),
        new CleanWebpackPlugin(buildPath),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/assets/images/icon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash]/',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'adrienne-debigare',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: '[contenthash].css'
        })
        // new OptimizeCssAssetsPlugin({
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {
        //         map: {
        //             inline: false,
        //         },
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: true
        // })
    ]
};
