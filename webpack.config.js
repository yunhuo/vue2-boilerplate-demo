'use strict';
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DashboardPlugin = require('webpack-dashboard/plugin');
let CleanPlugin = require('clean-webpack-plugin');
let autoprefixer = require('autoprefixer');

module.exports = {
    entry: __dirname + '/src/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?t=\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(png|jpg|gif|svg)(\?t=\d+)?$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    postcss:[autoprefixer({browser: ['last 2 versions']})],
    plugins: [
        new CleanPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tpl.html'
        })
    ]
};

if(process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,
        },
        compress: {
            warnings: false
        }
    }));
}else {
    module.exports.plugins.push(new DashboardPlugin());
    module.exports.devtool = 'eval-source-map';
}
