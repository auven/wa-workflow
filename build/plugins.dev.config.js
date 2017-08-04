var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');

pluginsConfig.push(
    new webpack.HotModuleReplacementPlugin()
);

pluginsConfig.push(
    new webpack.NamedModulesPlugin()
);

module.exports = pluginsConfig;