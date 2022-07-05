let product1 = { price: 5, quantity: 2 };
// 访问属性的方式
console.log(product1.quantity);
console.log(product1["quantity"]);
console.log(Reflect.get(product1, 'quantity'));


let product = { price: 5, quantity: 2 };

// Reflect 可以保证了当我们的对象有继承自其他对象的值或函数时，this指针能正确的指向使用的对象
let proxiedProduct = new Proxy(product, {
    get(target, key, receiver) {
        console.log('get', target, key, receiver);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log('set', target, key, value, receiver);
        return Reflect.set(target, key, value, receiver);
    }
});

proxiedProduct.quantity = 4;
console.log(proxiedProduct.quantity);