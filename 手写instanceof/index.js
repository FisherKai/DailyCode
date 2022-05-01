function myInstanceOf(L, R){
    let LP = L.__proto__;
    let RP = R.prototype;
    while (true) {
        if (LP === null) {
            return false;
        }
        if (LP === RP) {
            return true
        }
        LP = LP.__proto__
    }
}
console.log(myInstanceOf({}, Array))
