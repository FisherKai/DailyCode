var str = "sfsf4dg3df5gdfg";
// 去掉所有数字
console.log(str.replace(/\d/g, ""))
// 把数字框起来，比如变成sfsf[4]dg[3]df[5]gdfg
console.log(str.replace(/(\d)/g, "[$1]"));
// 把数字乘以2，比如变成sfsf8dg6df10gdfg
console.log(str.replace(/\d/g, function (currentStr, index, originStr) {
    console.log(currentStr, index, originStr);
    return Number(currentStr) * 2;
}))

/**
 * replace 方法的一个参数为字符串或者正则表达式
 * 第二个参数为字符串或者function
 * 为function时
 * 第一个参数为匹配到的字符串
 * 中间的参数：如果正则使用了分组匹配就为多个否则无此参数
 * 倒数第二个参数为匹配到的字符串索引的位置
 * 最后一个参数为原始字符串
 */