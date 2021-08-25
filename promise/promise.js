class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallBack = [];
        this.onRejectedCallBack = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallBack.forEach(fn => fn());
            }
        }
        const rejected = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallBack.forEach(fn => fn());
            }
        }
        executor(resolve, rejected);
    }

    then(onFulfilled, onRejected) {
        const promise1 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    resolvePromise(promise1, onFulfilled(this.value), resolve, reject)
                }, 0);
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    resolvePromise(promise1, onRejected(this.value), resolve, reject)
                }, 0);
            }
            if (this.state === 'pending') {
                this.onFulfilledCallBack.push(() => {
                    setTimeout(() => {
                        resolvePromise(promise1, onFulfilled(this.value), resolve, reject)
                    }, 0);
                });
                this.onRejectedCallBack.push(() => {
                    setTimeout(() => {
                        resolvePromise(promise1, onRejected(this.value), resolve, reject)
                    }, 0);
                });
            }
        });
        return promise1;
    }
}

const resolvePromise = (promise1, promise2, resolve, reject) => {
    if (promise1 === promise2) {
        return reject(new TypeError('循环引用'));
    }
    // console.log('resolvePromise',promise2 instanceof Promise)
    if (promise2 instanceof Promise) {
        promise2.then.call(promise2, (res) => {
            // resolve(res);
            // 递归解析
            resolvePromise(promise1, res, resolve, reject);
        }, (err) => {
            reject(err);
        })
    } else {
        resolve(promise2);
    }
}

module.exports = Promise;