/**
 * Js有七种内置类型
 * null
 * undefined
 * boolean
 * number
 * string
 * object
 * symbol ES6中新增
 * PS：除Object外其他为基本类型
 */
// typeof 返回的结果为string
console.log(typeof undefined === "undefined");  // true
console.log(typeof true === "boolean");  // true
console.log(typeof 32 === "number");  // true
console.log(typeof "43" === "string");  // true
console.log(typeof {} === "object");  // true
// typeof 对null处理有历史遗留问题
// 正确应该是 typeof null==='null' 返回true
console.log(typeof null === "object"); // true
// 所以我们需要用复合条件来检测null的类型
var a = null;
console.log(!a && typeof a === 'object');  // true
