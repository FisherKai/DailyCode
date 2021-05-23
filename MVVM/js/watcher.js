class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 获取old value
        this.value = this.get();
    }
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    }
    get() {
        Dep.target = this;
        let value = this.getVal(this.vm, this.expr);
        Dep.target = null;
        return value;
    }
    update() {
        let newValue = this.getVal(this.vm, this.expr),
            oldValue = this.value;

        if (newValue != oldValue) {
            // 调用对应watcher的callback
            this.cb(newValue);
        }
    }
}