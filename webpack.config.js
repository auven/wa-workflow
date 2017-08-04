const { resolve } = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const entryConfig = require('./build/entry.config');


module.exports = {
    entry: require('./build/entry.config'),
    output: require('./build/output.config'),
    resolve: require('./build/resolve.config'),
    module: require('./build/inherit/module.config'),
    plugins: require('./build/inherit/plugins.config')
}