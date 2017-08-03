/**
 * @file 获得项目源文件目录
 * @author Auven
 */

var path = require('path');
var dir = {};

// 源文件目录
dir.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
dir.srcRootDir = path.resolve(dir.staticRootDir, './src'); // 项目业务代码根目录
dir.vendorDir = path.resolve(dir.srcRootDir, './vendor'); // 存放所有不能用npm管理的第三方库
dir.assetDir = path.resolve(dir.srcRootDir, './asset'); // 存放各种静态资源，包括图片，字体文件
dir.pageDir = path.resolve(dir.srcRootDir, './page'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
dir.commonDir = path.resolve(dir.srcRootDir, './common'); // 存放各个页面使用到的公共资源，包括布局layout，js模块module，公共样式style
dir.componentDir = path.resolve(dir.srcRootDir, './component'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要

// 生成文件目录
dir.buildDir = path.resolve(dir.staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = dir;