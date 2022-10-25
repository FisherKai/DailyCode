/**
 * 简易沙箱实现，可以使用with的特性实现
 */

// 定义上下文
var ctx = {
    func: function (e) {
        console.log(e);
    },
    foo: 'f1'
}

// 定义全局变量
var foo = 'foo';

function sandBox(code, ctx) {
    with (ctx) {
        eval(code);
    }
}

const code = `func(foo)`;

sandBox(code, ctx);  // f1