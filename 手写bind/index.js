Function.prototype.myBind = function (obj) {
    if (typeof this !== 'function') {
        throw new TypeError('error');
    }
    var _this = this;
    var args = [...obj].slice(1);

    return function () {
        return _this.apply(obj, args.concat([...arguments]));
    }
}