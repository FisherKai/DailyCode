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
var str=' yukai';
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