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
 * 返回值:	数组对象。
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
});

/**
 * includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
 * 参数	描述
 * searchElement	必须。需要查找的元素值。
 * fromIndex	可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
 * 返回值：	布尔值。如果找到指定值返回 true，否则返回 false。
 */
console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, 3].includes(3, 3));  // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true

/**
 * indexOf()	搜索数组中的元素，并返回它所在的第一次出现的位置。
 * 参数	描述
 * item	必须。查找的元素。
 * start 可选的整数参数。规定在数组中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
 * 返回值
 * Number	元素在数组中的位置，如果没有搜索到则返回 -1。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var a = fruits.indexOf("Apple", 4);
console.log(a);  // 6

/**
 * isArray()	判断对象是否为数组。
 * 如果对象是数组返回 true，否则返回 false。
 * 参数	描述
 * obj	必需，要判断的对象。
 * 返回值:	布尔值，如果对象是数组返回 true，否则返回 false。
 */
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

/**
 * join()	把数组的所有元素放入一个字符串。
 * 元素是通过指定的分隔符进行分隔的。
 * 参数	描述
 * separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符
 * 返回值 string
 */
console.log([1, 2, 3].join(''), typeof [1, 2, 3].join('')); // 123 string

/**
 * keys()	返回数组的可迭代对象，包含原始数组的键(key)！！！也就是只包含数组的下标！！！。
 * 参数
 * 无传入参数
 * 返回值
 * 可迭代对象
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var obj = fruits.keys();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

/**
 * lastIndexOf()	搜索数组中的元素，并返回它最后出现的位置。
 * 从该字符串的后面向前查找。
 * 语法
 * array.lastIndexOf(item,start)
 * 参数	描述
 * item	必需。规定需检索的字符串值。
 * start	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
 * 返回值 Number
 */
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var a = fruits.lastIndexOf("Apple");
console.log(a) // 6

/**
 * map()	通过指定函数处理数组的每个元素，并返回处理后的数组。
 * map()方法按照原始数组元素顺序依次处理元素。
 * 注意： map() 不会对空数组进行检测。
 * 注意： map() 不会改变原始数组。
 * 语法
 * array.map(function(currentValue,index,arr), thisValue)
 * 返回值：	返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 */
var numbers = [2, 4, 6, 8];
var result = numbers.map(function (value) {
    return value / 2;
});
result.forEach(function (ele) {
    console.log(ele);
});

/**
 * pop()	删除数组的最后一个元素并返回删除的元素。
 * 此方法会改变数组
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('pop:', fruits.pop(), '\n');
fruits.forEach(function (ele) {
    console.log(ele);
});

/**
 * push()	向数组的末尾添加一个或更多元素，并返回新的长度。
 * 注意： 新元素将添加在数组的末尾。
 * 注意： 此方法改变数组的长度。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
fruits.forEach(function (ele) {
    console.log(ele);
});

/**
 * reduce()	将数组元素计算为一个值（从左到右）
 * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 * reduce() 可以作为一个高阶函数，用于函数的 compose。
 * 注意: reduce() 对于空数组是不会执行回调函数的。
 * 语法
 * array.reduce(function(total, currentValue, currentIndex?, arr?), initialValue?)
 */
var numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
    return total + Math.round(num);
}
var result = numbers.reduce(getSum, 0);
console.log(`四舍五入后的结果为:${result}`);

/**
 * reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
 * 注意: reduce() 对于空数组是不会执行回调函数的。
 * 语法
 * array.reduceRight(function(total, currentValue, currentIndex?, arr?), initialValue?)
 */
var numbers = [2, 45, 30, 100];
function getSum(total, num) {
    return total - num;
}
var result = numbers.reduceRight(getSum);
console.log(`从右往左依次减的值为:${result}`);

/**
 * reverse()	反转数组的元素顺序。
 * 会改变原数组
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

/**
 * shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 * 注意： 此方法改变数组的长度！ 并且会改变原数组！
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var shift = fruits.shift();
console.log(`shift的值为:${shift}\nfruits数组的值为:`);
fruits.forEach(function (ele) {
    console.log(ele);
});

/**
 * slice()	选取数组的一部分，并返回一个新数组。
 * slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
 * 注意： slice() 方法不会改变原始数组。
 * 语法
 * array.slice(start, end)
 * 如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
 * 返回值
 * Type	描述
 * Array	返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 */
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
myBest.forEach(function (ele) {
    console.log(ele);
});// Lemon,Apple

/**
 * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
 * some() 方法会依次执行数组的每个元素：
 * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
 * 如果没有满足条件的元素，则返回false。
 * 注意： some() 不会对空数组进行检测。
 * 注意： some() 不会改变原始数组。
 * 语法
 * array.some(function(currentValue,index?,arr?),thisValue?)
 */
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
console.log(ages.some(checkAdult)); //true

/**
 * sort() 方法用于对数组的元素进行排序。
 * 排序顺序可以是字母或数字，并按升序或降序。
 * 默认排序顺序为按字母升序。
 * 注意：当数字是按字母顺序排列时"40"将排在"5"前面。
 * 使用数字排序，你必须通过一个函数作为参数来调用。
 * 函数指定数字是按照升序还是降序排列。
 * 这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。
 * 注意： 这种方法会改变原始数组！。
 * 语法
 * array.sort(sortfunction)
 * 参数 Values
 * sortfunction	可选。规定排序顺序。必须是函数。
 * 返回值
 * Array	对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
 */
// 升序
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
// 降序
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return b - a });
// 字母降序
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

/**
 * splice() 方法用于添加或删除数组中的元素。
 * 注意：这种方法会改变原始数组。
 * 语法
 * array.splice(index,howmany,item1,.....,itemX)
 * 参数	描述
 * index	必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
 * howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
 * item1, ..., itemX	可选。要添加到数组的新元素。
 * 返回值
 * Array	如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
 */
// 移除数组的第三个元素，并在数组第三个位置添加新元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Mango
// 从第三个位置开始删除数组后的两个元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);  // Banana,Orange
// 数组中添加新元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango

/**
 * toString() 方法可把数组转换为字符串，并返回结果。
 * 注意： 数组中的元素之间用逗号分隔
 * 不会改变原数组
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.toString();
console.log(result, typeof result);

/**
 * unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
 * 注意： 该方法将改变数组的数目。
 * 语法
 * array.unshift(item1,item2, ..., itemX)
 * 参数	描述
 * item1,item2, ..., itemX	可选。向数组起始位置添加一个或者多个元素。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

/**
 * valueOf() 方法返回 Array 对象的原始值。
 * 该原始值由 Array 对象派生的所有对象继承。
 * valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。
 * 注意： valueOf() 方法不会改变原数组。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits.valueOf(),fruits.valueOf())