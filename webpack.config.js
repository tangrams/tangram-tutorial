'use strict';

// var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    debug: true,
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        javascript: ['./App.jsx'],
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /src(\/|\\).*\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel' ]
            },
            {
                test: /src(\/|\\).*\.css$/,
                loader: 'style!css'
            },
            {
                test: /src(\/|\\).*\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.md$/,
                loader: 'html!markdown?gfm=false'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: []
};
