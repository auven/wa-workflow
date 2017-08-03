/**
 * @file 拼接webpack entry（入口）数组
 * @author Auven
 */

var pageArr = require('./base/pageArr');
let { resolve } = require('path');
let dir = require('./base/dir');

var configEntry = {};

pageArr.forEach((page) => {
    configEntry[page] = resolve(dir.pageDir, page + '/index');
});

console.log(configEntry);

module.exports = configEntry;