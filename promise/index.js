// const Promise = require('./promise.js');
const promise = new Promise((resolve, reject) => {
    resolve(new Promise((resolve, reject) => {
        resolve('Promise1');
    }));
})
// console.log(promise instanceof Function);
promise.then(res => {
    console.log(res);
    return new Promise((resolve, reject) => {
        resolve('Promise2');
    })
}).then(res => {
    console.log(res);
});