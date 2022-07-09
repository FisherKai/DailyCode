/**
 * 01.Object.is()
 * 产生原因：
 * ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。
 * 它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。
 * 用法：
 * 它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
 */
console.log(Object.is("foo", "foo"));  // true
console.log(Object.is({}, {})); // false
console.log(+0 === -0); // true
console.log(NaN === NaN); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

// es5里可以这么写
Object.defineProperty(Object, "is", {
    value: function (x, y) {
        if (x === y) {
            // 针对+0不等于-0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y
    },
    writable: true,
    configurable: true,
    enumerable: false
})
/**
 * value：属性默认值
 * enumerable：是否可通过for-in循环，flase为不可循环，默认值为true
 * configurable：是否可调用defineProperty改变定义特性，默认值为true
 * writable：是否可改变值，默认值为true，delete date.p之后，值会重置为默认值。
 * 为false时，假设date变量为Date类的实例，那么此时改变值的语句如：date.p = 6、delete date.p 不生效
 */

/**
 * 02.Object.assign()
 * Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 */
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2, c: 3 }

Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]
//  注意点3
// 上面代码中，Object.assign()把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。

const source = {
    get foo() { return 1 }
};
const targetObj = {};
Object.assign(targetObj, source);  // { foo: 1 }
// 注意点4
// 上面代码中，source对象的foo属性是一个取值函数，Object.assign()不会复制这个取值函数，只会拿到值以后，将这个值复制过去。

/**
 * 注意点：
 * 1. 浅拷贝
 * 2. 同名属性的替换
 * 3. 数组的处理
 */

/**
 * 03.Object.getOwnPropertyDescriptors() 
 * ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象
 */
const obj = {
    foo: 123,
    get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }

/**
 * 04. __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
 */
// __proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）。
// 目前，所有浏览器（包括 IE11）都部署了这个属性。
// es5 的写法
const obj1 = {
    method: function () {
        //...
    }
};
obj1.__proto__ = someOtherObj;

// es6 的写法
var obj1 = Object.create(someOtherObj);
obj1.method = function () {
    // ...
};
// 该属性没有写入 ES6 的正文，而是写入了附录，原因是__proto__前后的双下划线，说明它本质上是一个内部属性，
// 而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。标准明确规定，只有浏览器必须部署这
// 个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还
// 是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、
// Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

// 实现上，__proto__调用的是Object.prototype.__proto__，具体实现如下。

Object.defineProperty(Object.prototype, '__proto__', {
    get() {
        let _thisObj = Object(this);
        return Object.getPrototypeOf(_thisObj);
    },
    set(proto) {
        if (this === undefined || this === null) {
            throw new TypeError();
        }
        if (!isObject(this)) {
            return undefined;
        }
        if (!isObject(proto)) {
            return undefined;
        }
        let status = Reflect.setPrototypeOf(this, proto);
        if (!status) {
            throw new TypeError();
        }
    },
});

function isObject(value) {
    return Object(value) === value;
}

/**
 * 05. Object.keys()，Object.values()，Object.entries()
 */
/**
 * 06. Object.fromEntries()
 * 对Object.entries()的逆向操作
 */
/**
 * 07. Object.hasOwn()
 * JavaScript 对象的属性分成两种：自身的属性和继承的属性。对象实例有一个hasOwnProperty()方法，可以判断某个属性是否为原生属性。
 * ES2022 在Object对象上面新增了一个静态方法Object.hasOwn()，也可以判断是否为自身的属性。
 * Object.hasOwn()可以接受两个参数，第一个是所要判断的对象，第二个是属性名。
 */
var _hasOwnObj = {
    a: 1
}
_hasOwnObj.b = 2;
console.log(_hasOwnObj.hasOwnProperty('a')); // true
console.log(_hasOwnObj.hasOwnProperty('b')); // true
console.log(Object.hasOwn(_hasOwnObj, 'a')); // true
console.log(Object.hasOwn(_hasOwnObj, 'b')); // true




