// eg.01
let price = 5;
let quantity = 2;
let total = 0;
console.log(total);
let dep = new Set();

let effect = () => {
    total = price * quantity;
}

function track() {
    dep.add(effect);
}

function trigger() {
    dep.forEach(effect => effect());
}

track();
effect();
quantity = 3
trigger();

console.log(total);