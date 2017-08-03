const { resolve } = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',  // 最新版本的webpack，不让简写loader，所以必须加上“-loader”
            exclude: resolve(__dirname, '../../node_modules'), // 不处理在这个文件夹里的ES6文件，即指定不打包的范围，必须是绝对路径
            include: resolve(__dirname, '../../src/'), // 指定打包的范围，必须是绝对路径
            query: {
                presets: ['latest'] // 告诉babel如何去处理我们的ES6，以哪个版本的ES6规则来处理，这里的lastest是所有的版本
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'less-loader'
                ]
            })
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('postcss-import'), // 处理css中的@import
                            require('autoprefixer')  // 自动添加浏览器前缀
                        ];
                    }
                }
            }, 'sass-loader']
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
            test: /\.(png|jpg|git|svg)$/i,
            loaders: [
                "url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]",
                "image-webpack-loader"  // 压缩图片
            ]
        },
        {
            test: /.art$/,
            use: [ 'art-template-loader' ]
        }
    ]
}