/**
 * Module Mode 模块模式
 * JavaScript中实现模块的方法：
 * 1、对象字面量表示法
 * 2、Module 模式
 * 3、AMD 模块
 * 4、CommonJs模块
 * 5、ECMAScript Harmony 模块
 */

/**
 * 对象字面量
 */
var myObj1Literal = {
    var1: varValue,
    Fun1: function () { }
}

/**
 * 模块模式
 */
var testModule = (function () {
    // 私有变量
    var counter = 0;
    // 私有方法
    var privateFun = function () {

    },

    return {
        // 公有变量
        publicVar: 'counter1',
        // 公有方法
        add: function () {
            return ++counter;
        },
        reset: function () {
            counter = 0;
        }
    }
})();