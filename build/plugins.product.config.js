var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');

pluginsConfig.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    })
);

module.exports = pluginsConfig;