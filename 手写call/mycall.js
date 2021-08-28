Function.prototype.mycall = function (that) {
    if (typeof this !== 'function') {
        throw new Error('error');
    }
    that.a = this;
    const args = [...arguments].splice(1);
    let res = that.a(...args);
    delete that.a;
    return res;
}

function say(a, b) {
    console.log(`hello ${this.name},${a},${b}`);
}

var obj = {
    name: 'yukai'
}

say.mycall(obj, 312312, 313123);