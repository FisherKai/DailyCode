class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

/**
 * 创建元素节点
 * @param {*} type 元素类型
 * @param {*} props 元素属性
 * @param {*} children 孩子节点
 * @returns 
 */
function createElement(type, props, children) {
    return new Element(type, props, children);
}

/**
 * 设置元素属性
 * @param {*} node 元素节点 
 * @param {*} key 属性名
 * @param {*} value 属性值
 */
function setAttr(node, key, value) {
    switch (key) {
        case 'value':
            if (node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        case 'className':
            node.setAttribute('class', value);
            break
        default:
            node.setAttribute(key, value);
            break;
    }
}

/**
 * 渲染元素
 * @param {*} eleObj 虚拟dom元素
 */
function renderDom(eleObj) {
    let el = document.createElement(eleObj.type);
    for (const key in eleObj.props) {
        setAttr(el, key, eleObj.props[key]);
    }
    eleObj.children.forEach(element => {
        element = (element instanceof Element) ? renderDom(element) :
            document.createTextNode(element);
        el.appendChild(element);
    });
    return el;
}

/**
 * 渲染DOM
 * @param {*} el 渲染节点 
 * @param {*} target 目标节点
 */
function render(el, target) {
    let ele = renderDom(el);
    target.appendChild(ele);
}

export { createElement, render, Element, renderDom };