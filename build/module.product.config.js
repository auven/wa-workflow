var ExtractTextPlugin = require('extract-text-webpack-plugin');

var moduleConfig = require('./inherit/module.config');

moduleConfig.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
      'postcss-loader'
    ]
  })
});

moduleConfig.rules.push({
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
      'postcss-loader',
      'less-loader'
    ]
  })
});

moduleConfig.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
      'postcss-loader',
      'sass-loader'
    ]
  })
});

module.exports = moduleConfig;
