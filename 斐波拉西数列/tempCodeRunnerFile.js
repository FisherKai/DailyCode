/**
 * 递归，从顶到底
 * @param {*} n 
 * @returns 
 */
function Firb1(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return Firb1(n - 1) + Firb1(n - 2);
    }
}

/**
 * 辅助蹦床函数
 * @param {*} func 
 * @param {*} a 
 * @returns 
 */
function trampoline(func, a) {
    let result = func.call(func, a);
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

/**
 * 使用一个数组从底到顶存储每一项数据
 * @param {*} n 
 * @returns 
 */
function Firb2(n) {
    let i = 1, h = [];
    while (i <= n) {
        if (i === 1 || i === 2) {
            h.push(1);
        } else {
            h[i - 1] = h[i - 2] + h[i - 3];
        }
        i++;
    }
    return h.pop()
}


console.log(trampoline(Firb1, 100));