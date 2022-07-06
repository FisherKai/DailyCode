const targetMap = new WeakMap();
let activeEffect = null;

function effect(eff) {
    activeEffect = eff;
    activeEffect();
    activeEffect = null;
}

/**
 * vue3里面的compositionAPI 里的ref
 * ref接受一个值并返回一个响应的、可变的Ref对象
 * @param {*} raw 
 */
function ref(raw) {
    const r = {
        get value() {
            track(r, 'value');
            return raw;
        },
        set value(newVal) {
            // 判断是否相等再赋值进行trigger 否则会进入死循环
            if (raw !== newVal) {
                raw = newVal;
                trigger(r, 'value');
            }
        }
    }
    return r;
}

function track(target, key) {
    if (activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = new Set()))
        }
        dep.add(activeEffect);
    }

}

function trigger(target, key) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach(effect => effect());
    }
}

function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            let result = Reflect.get(target, key, receiver);
            track(target, key);
            return result;
        },
        set(target, key, value, receiver) {
            let oldValue = target[key];
            let result = Reflect.set(target, key, value, receiver);
            if (oldValue !== value) {
                trigger(target, key);
            }
            return result;
        }
    }
    return new Proxy(target, handler);
}

let product = reactive({ price: 5, quantity: 2 });
let salePirce = ref(0);
let total = 0;

effect(() => {
    total = salePirce.value * product.quantity;
});
effect(() => {
    salePirce.value = product.price * 0.9;
});

console.log(`total:`, total);
console.log(`salePirce:`, salePirce.value);

product.quantity = 3;
product.price = 10;

console.log(`total:`, total);
console.log(`salePirce:`, salePirce.value);