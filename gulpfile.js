'use strict';

require('babel-core/register');

var gulp = require('gulp');

var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var del = require('del');
var CompressionPlugin = require('compression-webpack-plugin');

gulp.task('build', ['clean', 'webpack:build']);

gulp.task('clean', function (callback) {
    del([
        'dist/**'
    ], callback);
});

gulp.task('webpack:build', function (callback) {
    var buildConfig = Object.create(webpackConfig);

    buildConfig.debug = false;
    buildConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
    buildConfig.plugins.push(new CompressionPlugin());
    // This is so that react loads the minified version in production
    buildConfig.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));

    webpack(buildConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }

        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        callback();
    });
});

var WebpackDevServer = require('webpack-dev-server');

gulp.task('dev-server', ['webpack-dev-server']);

gulp.task('webpack-dev-server', function (callback) {
    // The next two lines are for hot loading
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    webpackConfig.entry.javascript.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');

    var compiler = webpack(webpackConfig);

    var server = new WebpackDevServer(compiler, {
        // contentBase: path.join(__dirname, 'src'),
        quiet: false,
        noInfo: false,
        publicPath: '/',
        stats: { colors: true },
        devServer: {
            historyApiFallback: true
        },
        hot: true,
        inline: true
    });

    // server.use('/', function(req, res) {
    //     res.sendFile(path.join(__dirname+'/index.html'));
    // });

    server.listen(8080, '0.0.0.0', function (err) {
        if (err) {
            console.log('could not start dev server');
            console.error(err);
        }
    });
});
