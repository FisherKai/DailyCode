/**
 * 判断obj是否为一个整数
 * @param {*} obj 
 */
function isInteger(obj) {
    return Math.floor(obj) == obj
};

/**
 * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
 * @param {*} floatNum 
 */
function toInteger(floatNum) {
    var ret = { times: 1, num: 0 }
    var isNegative = floatNum < 0
    if (isInteger(floatNum)) {
        ret.num = floatNum
        return ret
    }
    var strfi = floatNum + ''
    var dotPos = strfi.indexOf('.')
    var len = strfi.substr(dotPos + 1).length
    var times = Math.pow(10, len)
    var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10)
    ret.times = times
    if (isNegative) {
        intNum = -intNum
    }
    ret.num = intNum
    return ret
}

/**
 * 封装浮点数运算操作
 * @param {*} a 
 * @param {*} b 
 * @param {*} op add subtract multiply divide
 */
function operation(a, b, op) {
    var o1 = toInteger(a);
    var o2 = toInteger(b);
    var n1 = o1.num;
    var n2 = o2.num;
    var t1 = o1.times;
    var t2 = o2.times;
    var max = t1 > t2 ? t1 : t2;
    var result = null
    switch (op) {
        case 'add':
            if (t1 === t2) { // 两个小数位数相同
                result = n1 + n2
            } else if (t1 > t2) { // o1 小数位 大于 o2
                result = n1 + n2 * (t1 / t2)
            } else { // o1 小数位 小于 o2
                result = n1 * (t2 / t1) + n2
            }
            return result / max
        case 'subtract':
            if (t1 === t2) {
                result = n1 - n2
            } else if (t1 > t2) {
                result = n1 - n2 * (t1 / t2)
            } else {
                result = n1 * (t2 / t1) - n2
            }
            return result / max
        case 'multiply':
            result = (n1 * n2) / (t1 * t2);
            return result;
        case 'divide':
            result = (n1 / n2) * (t2 / t1);
            return result;
        case 'remainder':
            result = (n1 * max) % (n2 * max);
            return result;
    }
}

/**
 * 获取滑动角度角度
 * @param {*} angx 
 * @param {*} angy 
 */
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

/**
 * 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
 * @param {*} startx 
 * @param {*} starty 
 * @param {*} endx 
 * @param {*} endy 
 */
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}

/**
 * 处理利率
 * @param {*} rate 
 */
function dealRates(rate) {
    var result = {
        overWidthFlag: false,
        resultData: '0.00'
    }
    if (rate) {
        var decimal = rate.toString().split('.')[1];
        var persentDecimalLength = decimal.length - 2;
        if (persentDecimalLength <= 6) {
            result.overWidthFlag = false;
            if (persentDecimalLength <= 3) {
                result.resultData = (rate * 100).toFixed(3);
            } else {
                result.resultData = (rate * 100).toFixed(3);
            }

        } else {
            result.overWidthFlag = true;
            result.resultData = (rate * 100).toFixed(3);
        }
    } else {
        result.resultData = '--';
    }
    return result;
}

/**
 * 处理卡片背景颜色
 * @param {*} num 
 */
function dealCardColor(num) {
    if (num == 0) {
        return 0;
    } else if (num > 0 && num % 3 == 1) {
        return 1;
    } else if (num > 0 && num % 3 == 2) {
        return 2;
    } else if (num > 0 && num % 3 == 0) {
        return 3;
    } else {
        return 0
    }
}
module.exports = {
    /**
     * 判断obj是否为一个整数
     * @param {*} obj 
     */
    isInteger: isInteger,

    /**
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param {*} floatNum 
     */
    toInteger: toInteger,

    /**
     * 封装浮点数运算操作
     * @param {*} a 
     * @param {*} b 
     * @param {*} op add subtract multiply divide
     */
    operation: operation,

    /**
     * 获取滑动角度角度
     * @param {*} angx 
     * @param {*} angy 
     */
    getAngle: getAngle,

    /**
     * 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
     * @param {*} startx 
     * @param {*} starty 
     * @param {*} endx 
     * @param {*} endy 
     */
    getDirection: getDirection,

    /**
     * 处理利率
     * @param {*} rate 
     */
    dealRates: dealRates,

    /**
     * 处理卡片背景颜色
     * @param {*} num 
     */
    dealCardColor: dealCardColor
}

