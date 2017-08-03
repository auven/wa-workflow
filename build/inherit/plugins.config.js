let { resolve } = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let dir = require('../base/dir');
var pageArr = require('../base/pageArr');

var configPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    }),
    new ExtractTextPlugin({
        filename: 'static/css/[name].css'
    })
];

pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: page + '.html',
        template: resolve(dir.pageDir, page + '/index.art'),
        minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            useShortDoctype: true
        },
        chunks: [page]
    });
    configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;