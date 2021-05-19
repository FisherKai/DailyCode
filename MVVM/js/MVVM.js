/**
 * MVVM框架
 */
class MVVM {
    constructor(opt) {
        // 挂载在实例上
        this.$el = opt.el;
        this.$data = opt.data;

        // 如果有el就去编译
        if(this.$el){
            new Compile(this.$el,this);
        }
    }
}