/**
 * Decorator 装饰者模式
 * 目的在于促进代码复用
 * 思路：让一些辅助的函数去接收装饰对象，只改变该对象的属性，不改变其原型
 */
// eg: 使用多个Decorator装饰对象
// 被装饰的对象构造函数
function MacBook() {
    this.cost = function () {
        return 997;
    };
    this.screenSize = function () {
        return 11.6;
    };
}

// Decorator 1
function Memory(macBook) {
    var v = macBook.cost();
    macBook.cost = function () {
        return v + 75;
    };
}

// Decorator 2
function Engraving(macBook) {
    var v = macBook.cost();
    macBook.cost = function () {
        return v + 200;
    }
}

// Decorator 3
function Insurance(macBook) {
    var v = macBook.cost();
    macBook.cost = function () {
        return v + 250;
    }
}

// test code 
var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

// 输出：1522
console.log(mb.cost());

console.log(mb.screenSize());

// 抽象Decorator (抽象装饰者)
// MacBook接口定义
var MacBook = new Interface("MacBook", [
    "addEngraving",
    "addParallels",
    "add4GBRam",
    "add8GBRam",
    "addCase"
]);

var MacBookPro = function () { };

MacBookPro.prototype = {
    addEngraving: function () {

    },
    addParallels: function () {

    },
    add4GBRam: function () {

    },
    add8GBRam: function () {

    },
    addCase: function () {

    },
    getPrice: function () {
        return 900.00;
    }
};

var MacBookDecorator = function (macBook) {
    Interface.ensureImplements(macBook, MacBook);
    this.macBook = macBook;
};

MacBookDecorator.prototype = {
    addEngraving: function () {
        return this.macBook.addEngraving();
    }
}