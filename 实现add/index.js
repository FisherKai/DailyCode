/**
 * 实现add(1)(2)(3)(4)
 */

function add(m) {
    function addSum(n = 0) {
        return add(m + n);
    }
    addSum.toString = function () {
        return m;
    }
    return addSum;
}

let a = add(1)(2)();
console.log(+a);


var obj = {
    toString: function () {
        console.log('toString')
        return Object.prototype.toString.call(this)
    },
    valueOf: function () {
        console.log('valueOf')
        return Object.prototype.valueOf.call(this)
    }
}
// obj;
// obj++; // valueOf toString
// +obj; // valueOf toString
// obj == {};//valueOf
// obj === {}; //toString
// obj == 'test'; //valueOf
// obj === 'test'; //toString