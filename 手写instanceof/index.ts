interface Object {
    __proto__: any,
    prototype: any
}

function myInstanceOf1(L: Object, R: Object) {
    let LP = L.__proto__,
        RP = R.prototype;

    while (true) {
        if (LP === null) {
            return false;
        }
        if (LP === RP) {
            return true;
        }
        LP = LP.__proto__;
    }
}
console.log(myInstanceOf1({}, Array));