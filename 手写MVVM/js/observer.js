class Observer {
    constructor(data) {
        this.observe(data);
    }
    observe(data) {
        // 将原有数据改成get和set的形式
        if (!data || typeof data !== 'object') {
            return;
        }

        Object.keys(data).forEach(key => {
            // 劫持
            // {a:1,b:2}  a,b  1,2
            this.defineReactive(data, key, data[key]);
            this.observe(data[key]);
        })
        console.log(data);
    }
    defineReactive(obj, key, value) {
        let that = this,
            dep = new Dep();
        Object.defineProperty(obj, key, {
            // 是否可以用for循环遍历
            enumerable: true,
            // 是否可以删除
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newValue) {
                if (newValue != value) {
                    that.observe(newValue);
                    value = newValue;
                    dep.notify();
                }
            }
        })
    }
}

class Dep {
    constructor() {
        // 订阅的数组
        this.subs = [];

    }

    addSub(watcher) {
        this.subs.push(watcher);
    }

    notify() {
        this.subs.forEach(watcher => watcher.update());
    }
}