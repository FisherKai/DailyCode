let data = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

/**
 * 数组扁平化 flat处理
 * flat 该方法返回一个新数组，对原数据没有影响。
 * @param {Array} array_data 
 */
function arr1(array_data) {
    return array_data.flat(Infinity)
}

/**
 * 递归处理
 * @param {Array} array_data 
 */
let res = []
function arr2(array_data) {
    array_data.forEach((e) => {
        if (e instanceof Array) {
            arr2(e);
        } else {
            res.push(e);
        }
    })
}

/**
 * toString()
 * @param {Array} array_data 
 */
function arr3(array_data){
    return array_data.toString().split(',');
}

console.log(arr1(data))