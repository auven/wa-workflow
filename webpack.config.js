const { resolve } = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const entryConfig = require('./build/entry.config');


module.exports = {
    entry: require('./build/entry.config'),
    /*entry: {
        'user/info': resolve(__dirname, './src/page/index/index')
    },*/
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'static/js/[name].js'
    },
    module: require('./build/inherit/module.config'),
    plugins: require('./build/inherit/plugins.config')
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/page/index/index.art'),
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        })
    ]*/
}