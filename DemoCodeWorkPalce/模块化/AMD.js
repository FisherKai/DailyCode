/**
 * AMD 异步模块定义
 */
/**
 * define()
 * define(
 *      module_id 可选
 *      [dependencies] 可选
 *      function 实例化函数或对象的函数
 * );
 */
define('myModule', [
    'require',
    'dependency'
], function (require, factory) {
    'use strict';
    var myModule = {
        helloworld: function () {
            console.log(`hello world`);
        }
    }
    return myModule;
});

// require()
require([myModule], function (myModule) {
    myModule.helloworld();
});

// 动态依赖加载
define([
    'require',
    'dependency'
], function (require, factory) {
    'use strict';

    var helloworld;
    require(['myModule'], function (myModule) {
        helloworld = myModule.helloworld();
    });

    return {
        helloworld: helloworld
    }
});