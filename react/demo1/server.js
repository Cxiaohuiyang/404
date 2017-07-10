var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.config');
var path = require('path');
var server = new WebpackDevServer(webpack(config), {
    contentBase: config.publicPath,
    compress: true
});

server.listen(8088,()=>{
    console.log('run :8080 ');
});