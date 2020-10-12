/**
 * concat()	连接两个或更多的数组，并返回结果。
 * 合并三个数组的值
 * 参数可以是具体的值，也可以是数组对象。可以是任意多个。
 */
var a = [1, 2, 3], b = [4, 5], c = [6], d;
// concat不返回一个新的数组
a.concat(b, c);
d = a.concat(b, c);
// [ 1, 2, 3 ] [ 1, 2, 3, 4, 5, 6 ]
console.log(a, d);

/**
 * copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
 * 参数	描述
 * target	必需。复制到指定目标索引位置。
 * start	可选。元素复制的起始位置。
 * end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
 */
var a = [1, 2, 3, 4, 5, 6];
a.copyWithin(3, 1);
console.log(a);

/**
 * entries()	返回数组的可迭代对象。
 * entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"], obj;
obj = fruits.entries();
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

/**
 * every()	检测数值元素的每个元素是否都符合条件。
 * 返回值：	布尔值。如果所有元素都通过检测返回 true，否则返回 false。
 * 语法  array.every(function(currentValue,index,arr), thisValue)
 * function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
 * 函数参数:
 * 参数	描述
 * currentValue	必须。当前元素的值
 * index	可选。当前元素的索引值
 * arr	可选。当前元素属于的数组对象
 * thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 * 如果省略了 thisValue ，"this" 的值为 "undefined"
 */
var ages = [32, 33, 19, 40];
function checkAdult(age) {
    return age >= 18;
}
console.log(ages.every(checkAdult));

/**
 * fill()	使用一个固定值来填充数组。
 * 语法
 * array.fill(value, start, end)
 * 参数	描述
 * value	必需。填充的值。
 * start	可选。开始填充位置。
 * end	可选。停止填充位置 (默认为 array.length)
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// 返回一个新数组
fruits.fill(undefined, 0, 2);
console.log(fruits);

/**
 * find()	返回符合传入测试（函数）条件的数组元素。
 * 返回值：	返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined。
 */
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age > 18;
}

console.log(ages.find(checkAdult));

/**
 * findIndex()	返回符合传入测试（函数）条件的数组元素索引
 * 返回值：	返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1。
 */
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age > 18;
}

console.log(ages.findIndex(checkAdult));

/**
 * forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
 * array.forEach(function(currentValue, index, arr), thisValue)
 * currentValue	必需。当前元素
 * index	可选。当前元素的索引值。
 * arr	可选。当前元素所属的数组对象。
 * thisValue	可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值
 */
var a = [1, 2, 3, 4];
a.forEach(function (ele, index, arr) {
    console.log(`当前元素${ele},当前索引${index},所属于数组${arr}`);
});

/**
 * from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
 * 语法 
 * Array.from(object, mapFunction, thisValue)
 * 参数
 * 参数	描述
 * object	必需，要转换为数组的对象。
 * mapFunction	可选，数组中每个元素要调用的函数。
 * thisValue	可选，映射函数(mapFunction)中的 this 对象。
 */
var myArr = Array.from("YUKAI VERY COOL", e => e + 1);
console.log(`myArr的length:${myArr.length}`)
myArr.forEach(function (ele) {
    console.log(ele);
})

var setObj = new Set(["a", "b", "c"]);
var objArr = Array.from(setObj);
console.log(`setObj的length:${setObj.length},objArr的length:${objArr.length}`)
setObj.forEach(function (ele) {
    console.log(ele);
})
objArr.forEach(function (ele) {
    console.log(ele);
})

var obj = {
    a: 1,
    b: 2
};
var objArr = Array.from(obj);
console.log(`obj的length:${obj.length},objArr的length:${objArr.length}`)
objArr.forEach(function (ele) {
    console.log(ele);
})