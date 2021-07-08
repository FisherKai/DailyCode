/**
 * interface 接口设计
 */
var Interface = function (name, methods) {
    // 参数检查
    if (arguments.length != 2) {
        throw new Error('Please confirm whether the parameters passed by the interface to be checked are correct.');
    }
    if (methods.length == 0) {
        throw new Error('The methods of the interface cannot be empty');
    }
    this.Name = name;
    this.Methods = [];
    for (let index = 0; index < methods.length; index++) {
        const element = methods[index];
        if (typeof element != 'string') {
            throw new Error('The method name is not a string');
        }
        this.Methods.push(element);
    }
};

// interface static method
Interface.ensureImplement = function (object) {
    if (arguments.length < 2) {
        throw new Error('arguments at lest 2');
    }
    for (let index = 1; index < arguments.length; index++) {
        const element = arguments[index];
        if (element.constructor !== Interface) {
            throw new Error('not Interface');
        }
        for (let j = 0; j < element.methods.length; j++) {
            const method = element.methods[j];
            if (!object[method] || typeof object[method] != 'function') {
                throw new Error('' + method + 'not implemented');
            }
        }
    }
}