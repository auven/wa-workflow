/**
 * @file 获取页面数组
 * @author auven(1273961575@qq.com)
 */

let glob = require('glob');
let { resolve } = require('path');
let dir = require('./dir');
let options = {
    cwd: dir.pageDir, // 寻找page下面的所有页面
    sync: true, // 这里不能异步，只能同步
};
let pageArr = new glob.Glob('**/index.js', options).found; // 一个数组，形如['index', 'login', 'register']

for (var i = 0; i < pageArr.length; i++ ) {
    pageArr[i] = pageArr[i].substring(0, pageArr[i].lastIndexOf('/'));
}

module.exports = pageArr;