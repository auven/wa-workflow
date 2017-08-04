## 简介

本项目参考作者[@Array-Huang](https://github.com/Array-Huang)的[webpack的多页应用脚手架](https://github.com/Array-Huang/webpack-seed)，结合art-template，生成一个传统的多页应用。


用art-template来做前端模板嵌套，模板要用相对路径来做。本来想使用webpack路径别名来做，发现在没办法实现，因为art模板是先经过art-template-loader来处理的，这里面没办法使用路径别名

热更新的时候，修改html等必须手动刷新页面