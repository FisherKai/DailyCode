/**
 * let 的实现
 * 使用catch分句的块作用域
 */
{
    try {
        throw undefined;
    } catch (a) {
        a=2;
        console.log(a); // 2
    }
}
console.log(a)  //ReferenceError