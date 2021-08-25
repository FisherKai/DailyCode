/**
 * Prototype 原型模式
 * 基于继承的模式。其为实现继承的一种简单方式，它还可以带来一些性能上的提升：
 * 在对象定义的一个函数，它们都是引用创建，而不是创建自己的单份拷贝
 */
// 1、Object.create(prototype,optionalDescriptorObjects)   （原型，可选属性）
// 2、
var prototypeMode = (function () {
    function F() { }

    return function (proto) {
        F.prototype = proto;
        return new F();
    }
})()