## 简介

本项目参考作者[@Array-Huang](https://github.com/Array-Huang)的[webpack的多页应用脚手架](https://github.com/Array-Huang/webpack-seed)，结合art-template，生成一个传统的多页应用。


用art-template来做前端模板嵌套，模板要用相对路径来做。本来想使用webpack路径别名来做，发现在没办法实现，因为art模板是先经过art-template-loader来处理的，这里面没办法使用路径别名

热更新的时候，修改html等必须手动刷新页面。

测试了好多，发现热替换不能替换html，所以我决定采用全部刷新的方式。

一旦设置了hot，html没办法刷新，css不导出的话可以，js可以全局刷新。

css中的图片，使用相对路径，处理之后变成了相对于根目录的路径，所以最好设置publicPath，但是设置这个之后，只能在服务器状态下才能正常访问到相关资源。

每个页面的所有css都会打包进一个css里，不管是在js中引入还是在css中引入(@import)

TODO:
将某个文件夹下的文件原封不动复制到打包后的文件夹里，按需加载，异步加载
