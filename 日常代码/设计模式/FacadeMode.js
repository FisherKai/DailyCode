/**
 * Facade 外观模式
 * Facade模式是一种结构型模式。主要理念是把核心的很多内部方法抽象成公有接口给外部使用
 */
// eg:
var addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn);
    } else {
        el['on' + ev] = fn;
    }
}