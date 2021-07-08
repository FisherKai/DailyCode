/**
 * MVVM核心编译类
 */
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;

        if (this.el) {
            // 1.先把真实的DOM移入到内存中 fragment
            let fragment = this.node2fragment(this.el);
            // 2.编译=>提取想要的元素节点v-model和文本节点{{}}
            this.compile(fragment);
            // 3.把编译好的fragment放入页面中
            this.el.appendChild(fragment);
        }
    }

    /** 辅助函数 */
    isElementNode(node) {
        return node.nodeType === 1;
    }

    isDirective(name) {
        return name.includes('v-');
    }
    /** 核心函数 */
    node2fragment(el) {
        let fragment = document.createDocumentFragment(),
            firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }

    compileNode(node) {
        // v-model 指令的
        let attrs = node.attributes;
        Array.from(attrs).forEach(e => {
            // 判断属性名字是否带有v-
            console.log(e.name, e.value);
            if (this.isDirective(e.name)) {
                let expr = e.value,
                    [, type] = e.name.split('-');
                CompileUtils[type](node, this.vm, expr);
            }
        })
    }

    compileText(node) {
        // {{}}
        let expr = node.textContent;
        let reg = /\{\{([^}]+)\}\}/g;
        if (reg.test(expr)) {
            CompileUtils['text'](node, this.vm, expr);
        }
    }

    compile(fragment) {
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                // 是元素节点
                // 编译元素
                this.compileNode(node);
                // 递归遍历节点
                this.compile(node);
            } else {
                // 是文本节点
                // 编译文本
                this.compileText(node);
            }
        })
    }
}

CompileUtils = {
    /**
     * 辅助函数-获取$data上的值
     * eg：message.a.b.c.s.d
     */
    getVal(vm, expr) {
        expr = expr.split('.'); //a,b,c,s,d
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    },
    getValText(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            return this.getVal(vm, arguments[1]);
        })
    },
    /**
     * 文本处理
     */
    text(node, vm, expr) {
        let updateFn = this.updater['textUpdater'];
        let value = this.getValText(vm, expr);

        // {{a}} {{b}}
        expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            new Watcher(vm, arguments[1], () => {
                updateFn && updateFn(node, this.getValText(vm, expr));
            })
        })
        updateFn && updateFn(node, value);
    },
    setVal(vm, expr, value) {
        expr = expr.split('.'); //a,b,c,s,d
        return expr.reduce((prev, next, currentIndex) => {
            if (currentIndex === expr.length - 1) {
                return prev[next] = value;
            }
            return prev[next];
        }, vm.$data);
    },
    /**
     * 输入框处理
     */
    model(node, vm, expr) {
        let updateFn = this.updater['modelUpdater'];

        new Watcher(vm, expr, (newValue) => {
            updateFn && updateFn(node, this.getVal(vm, expr));
        });

        node.addEventListener('input', (e) => {
            let newValue = e.target.value;
            this.setVal(vm, expr, newValue);
        })

        updateFn && updateFn(node, this.getVal(vm, expr));
    },
    updater: {
        /**
         * 文本更新
         */
        textUpdater(node, value) {
            node.textContent = value;
        },
        /**
         * 输入框更新
         */
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}