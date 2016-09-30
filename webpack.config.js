'use strict';
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DashboardPlugin = require('webpack-dashboard/plugin');

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
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tpl.html'
        }),
        new DashboardPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    ],
    devtool: 'eval-source-map'
};