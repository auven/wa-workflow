let {resolve} = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let dir = require('../base/dir');
var pageArr = require('../base/pageArr');

var configPlugins = [
  new ExtractTextPlugin({
    filename: 'static/css/[name].[contentHash:8].css'
  }),

  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'static/common',      // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.[chunkHash:8].js',
    minChunks: 4,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
  })
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: page + '.html',
    template: resolve(dir.pageDir, page + '/index.art'),
    /*minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
    },*/
    chunks: ['runtime', 'static/common', page]
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
