/**
 * 模块管理机制
 */
var MyModules = (function () {
    var modules = {};

    /**
     * 定义模块
     * @param {*} name 模块名字
     * @param {*} deps 依赖
     * @param {*} impl 实现
     */
    function define(name, deps, impl) {
        for (let index = 0; index < deps.length; index++) {
            deps[index] = modules[deps[index]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    /**
     * 获取模块
     * @param {*} name 模块名字
     */
    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

// eg
MyModules.define('bar', [], function () {
    function hello() {
        console.log(`hello world!`);
    }

    return {
        hello: hello
    }
});

MyModules.define('foo', ['bar'], function (bar) {
    function say() {
        bar.hello();
        console.log(`my name is YK`);
    }
    return {
        say: say
    }
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

bar.hello();
foo.say();