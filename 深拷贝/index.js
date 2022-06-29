function deepClone(obj, map = new Map()) {
    if (typeof obj !== "object") {
        return obj;
    }
    if (map.get(obj)) {
        return map.get(obj);
    }

    let result = {};
    // 初始化返回结果
    if (
        obj instanceof Array ||
        // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
        Object.prototype.toString(obj) === "[object Array]"
    ) {
        result = [];
    }
    // 防止循环引用
    map.set(obj, result);
    for (const key in obj) {
        // 保证 key 不是原型属性
        console.log(key,obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key], map);
        }
    }

    // 返回结果
    return result;
}


let a = {
    a1: 1,
    a2: 2,
    a3: 3,
    a4: function (params) {
        console.log(params);
    },
    a5: {
        b1: "b1"
    },
}, b = {}, c = { a: a };
a.c = c;

let tempMap = new Map();
tempMap.set(a, b);
console.log(tempMap);

let e=deepClone(a);
console.log(e);