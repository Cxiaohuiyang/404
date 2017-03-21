var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

var server = new WebpackDevServer(webpack(config), {
    contentBase: config.publicPath,
    compress: true
});

server.listen(8080);