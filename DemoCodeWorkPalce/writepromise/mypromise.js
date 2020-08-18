/**
 * Promise的三种状态：pending-等待、resolve-成功、reject-失败
 * 最开始为pending状态、并且一旦成功或者失败，Promise的状态就不会再变了
 * @param {*} executor 
 */
function MyPromise(executor) {
    let _this = this;
    _this.$$status = 'pending';
    _this.failCallBack = undefined;
    _this.successCallBack = undefined;
    _this.error = undefined;

    executor(resolve.bind(_this), reject.bind(_this));

    function resolve(params) {
        if (_this.$$status === 'pending') {
            _this.$$status = 'success';
            _this.successCallBack(params);
        }
    }

    function reject(params) {
        if (_this.$$status === 'pending') {
            _this.$$status = 'fail';
            _this.failCallBack(params);
        }
    }
}

MyPromise.prototype.then = function (success, fail) {
    this.successCallBack = success;
    this.failCallBack = fail;
}

new MyPromise(function (resolve, reject) {
    setTimeout(_ => resolve('success'), 0)
}).then(res => {
    console.log(res);
})