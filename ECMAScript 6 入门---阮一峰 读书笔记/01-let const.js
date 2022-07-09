// eg.01
var a = [];
for (var index = 0; index < 10; index++) {
    a[index] = function () {
        console.log(index);
    }
}
a[6]();  // 10

var a = [];
for (let index = 0; index < 10; index++) {
    a[index] = function () {
        console.log(index);
    }
}
a[6]();  // 6

// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
{
    for (let i = 0; i < 3; i++) {
        let i = 'abc';
        console.log(i);
    }
    // abc
    // abc
    // abc
}

// 特性
// 01.不存在变量提升
{
    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;

    // let 的情况
    console.log(bar); // 报错ReferenceError
    let bar = 2;
}
// 02.暂时区
/**
 * ES6 明确规定，如果区块中存在let和const命令，
 * 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
 * 凡是在声明之前就使用这些变量，就会报错。
 * 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，
 * 称为“暂时性死区”（temporal dead zone，简称 TDZ）。
 */
{
    var tmp = 123;

    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
    }
}
/**
 * 下面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，
 * 只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。
 */
{
    typeof x; // ReferenceError
    let x;
}
// 如果一个变量根本没有被声明，使用typeof反而不会报错。
{
    typeof undeclared_variable // "undefined"
}
// 03.不允许重复声明
{
    // 报错
    function func() {
        let a = 10;
        var a = 1;
    }

    // 报错
    function func() {
        let a = 10;
        let a = 1;
    }
}




