let {resolve} = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let dir = require('../base/dir');
var pageArr = require('../base/pageArr');

var configPlugins = [
  new ExtractTextPlugin({
    filename: 'public/css/[name].css?v=[contentHash:8]'
  }),

  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common/common',      // 需要注意的是，chunk的name不能相同！！！
    // filename: 'public/js/[name].js?v=[chunkHash:8]',
    minChunks: 4,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common/runtime'
  })
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'views/' + page + '.html',
    template: resolve(dir.pageDir, page + '/index.art'),
    /*minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
    },*/
    chunks: ['common/runtime', 'common/common', page]
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
