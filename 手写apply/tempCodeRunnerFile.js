Function.prototype.myApply = function (that) {
    console.log(typeof this);
    if (typeof this !== 'function') {
        throw new Error('error');
    }
    that.a = this;
    let res = that.a(...arguments[1]);
    delete that.a;
    return res;
}

function say(a, b) {
    console.log(`hello ${this.name},${a},${b}`);
}

var obj = {
    name: 'yukai'
}

say.myApply(obj, [312312, 313123]);