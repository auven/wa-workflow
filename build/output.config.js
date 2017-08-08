let dir = require('./base/dir');

module.exports = {
  path: dir.distDir,
  filename: 'static/js/[name].[chunkHash:8].js',
  publicPath: '/',
  chunkFilename: "static/js/[name].[chunkHash:8].js", // 在按需加载（异步）模块的时候，这样的文件是没有被列在entry中的，使用这里定义的名字
}
