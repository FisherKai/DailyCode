// eg.02
/**
 * targetMap --- vue3 里面称之为目标图
 * targetMap 用来存储响应式对象的
 * depsMap 存储依赖属性
 * dep 存储effect
 */
const targetMap = new WeakMap();
function track(target, key) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(effect);
}

function trigger(target, key) {
    const depsMap = targetMap.get(target);
    console.log(depsMap);
    if (!depsMap) return;
    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach(effect => effect());
    }
}

let product = { price: 5, quantity: 2 }
let total = 0;

let effect = () => {
    total = product.price * product.quantity;
}

track(product, "quantity");
effect();
console.log(total);
product.quantity = 3;
trigger(product, "quantity");
console.log(total);
