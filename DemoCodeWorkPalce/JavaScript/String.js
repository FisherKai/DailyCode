/**
 * String 对象方法
 */
/**
 * charAt() 方法可返回指定位置的字符。
 * 第一个字符位置为 0, 第二个字符位置为 1,以此类推.
 * 语法：
 * string.charAt(index)
 * 参数值：
 * index	必需。表示字符串中某个位置的数字，即字符在字符串中的位置。
 * 返回值：
 * String	返回在指定位置的字符。
 */
var str = ' yukai';
console.log(str.charAt(2)); // u

/**
 * charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。
 * 字符串中第一个字符的位置为 0， 第二个字符位置为 1，以此类推。
 * 语法：
 * string.charCodeAt(index)
 * 参数值:
 * index	必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
 * 返回值：
 * Number	返回在指定的位置的字符的 Unicode 编码。
 */
var str = "HELLO WORLD";
var n = str.charCodeAt(0); // 72

/**
 * concat() 方法用于连接两个或多个字符串。
 * 该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。
 * 语法：
 * string.concat(string1, string2, ..., stringX)
 * 参数值：
 * string1, string2, ..., stringX	必需。将被连接为一个字符串的一个或多个字符串对象。
 * 返回值：
 * String	两个或多个字符串连接后生成的新字符串。
 */
var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var n = str1.concat(str2, str3);
console.log(n); // Hello world! Have a nice day!

/**
 * fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
 * 注意：该方法是 String 的静态方法，字符串中的每个字符都由单独的 Unicode 数字编码指定。使用语法： String.fromCharCode()。
 * 语法：
 * String.fromCharCode(n1, n2, ..., nX)
 * 参数值：
 * n1, n2, ..., nX	必需。一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
 * 返回值：
 * String	返回代表 Unicode 编码的字符。
 */
var n = String.fromCharCode(72, 69, 76, 76, 79);
console.log(n); // HELLO

/**
 * indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 * 如果没有找到匹配的字符串则返回 -1。
 * 注意： indexOf() 方法区分大小写。
 * 语法：
 * string.indexOf(searchvalue,start)
 * 参数值：
 * searchvalue	必需。规定需检索的字符串值。
 * start	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。
 * 返回值：
 * Number	查找指定字符串第一次出现的位置，如果没找到匹配的字符串则返回 -1。
 */
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("e", 5);
console.log(n) // 14

/**
 * includes() 方法用于判断字符串是否包含指定的子字符串。
 * 如果找到匹配的字符串则返回 true，否则返回 false。
 * 语法：
 * string.includes(searchvalue, start)
 * 参数值：
 * searchvalue	必需，要查找的字符串。
 * start	可选，设置从那个位置开始查找，默认为 0。
 * 返回值：
 * Boolean	如果找到匹配的字符串返回 true，否则返回 false。
 */
var str = "Hello world, welcome to the Runoob.";
var n = str.includes("world", 12);
console.log(n) // false