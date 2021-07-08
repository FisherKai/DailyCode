/**
 * MVVM框架
 */
class MVVM {
    constructor(opt) {
        // 挂载在实例上
        this.$el = opt.el;
        this.$data = opt.data;

        // 如果有el就去编译
        if (this.$el) {
            new Observer(this.$data);
            this.proxyData(this.$data);
            new Compile(this.$el, this);
        }
    }

    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newValue) {
                    data[key] = newValue;
                }
            })
        })
    }
}