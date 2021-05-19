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
        }
    }

    /** 辅助函数 */
    isElementNode(node) {
        return node.nodeType === 1;
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
        let attrs=node.attributes;
        Array.from(attrs).forEach(e=>{
            // 判断属性名字是否带有v-
        })
    }

    compileText(node) {
        // {{}}
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