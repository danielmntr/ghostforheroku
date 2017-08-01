var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry:'./assets/js/webpack.entry.js',
    output: {
        path: path.resolve(__dirname, './assets/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader?minimize=true', 'postcss-loader?sourceMap']
            },
            {
                test: /\.sass$/, 
                use: ['style-loader', 'css-loader?minimize=true', 'postcss-loader?sourceMap', 'sass-loader?indentedSyntax&sourceMap']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [
                    {
                        loader: 'file-loader', 
                        options: {
                            name: '[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader', 
                        options: {
                            gifsicle: { 
                                optimizationLevel: 7, 
                                interlaced: false
                            }, 
                            optipng: {
                                optimizationLevel: 7,
                                interlaced: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
            context: __dirname,
            postcss: [ autoprefixer ]
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
};