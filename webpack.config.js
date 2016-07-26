'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    debug: true,
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        app: ["./App.react.js"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /src(\/|\\).*\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
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
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.md$/,
                loader: 'html!markdown?gfm=false'
            }
        ]
    },
    plugins: []
};
