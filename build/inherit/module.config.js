const {resolve} = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dir = require('../base/dir');

module.exports = {
  rules: [
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [dir.srcRootDir, resolve('test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',  // 最新版本的webpack，不让简写loader，所以必须加上“-loader”
      exclude: resolve(__dirname, '../../node_modules'), // 不处理在这个文件夹里的ES6文件，即指定不打包的范围，必须是绝对路径
      include: dir.srcRootDir, // 指定打包的范围，必须是绝对路径
      query: {
        presets: ['latest'] // 告诉babel如何去处理我们的ES6，以哪个版本的ES6规则来处理，这里的lastest是所有的版本
      }
    },
    {
      test: /\.html$/,
      loader: "html-loader"
    },
    {
      // test: /\.ejs$/,
      test: /\.tpl$/,
      loader: "ejs-loader"
    },
    {
      test: /\.(png|jpg|gif|svg)$/i,
      loaders: [
        "url-loader?limit=10000&name=public/assets/img/[name]-[Hash:8].[ext]", // 这里无法使用chunkHash。。
        "image-webpack-loader"  // 压缩图片
      ]
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: dir.srcRootDir,
      loader: 'file-loader',
      options: {
        name: 'public/assets/fonts/[name].[Hash:8].[ext]', // 这里无法使用chunkHash。。
      },
    },
    /*{
      test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
      include: dir.srcRootDir,
      loader: 'file-loader',
      options: {
        name: 'public/assets/fonts/[name].[Hash:8].[ext]', // 这里无法使用chunkHash。。
      },
    },*/
    {
      test: /.art$/,
      use: ['art-template-loader']
    }
  ]
}
