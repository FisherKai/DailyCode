import { ATTRS, REMOVE, REPLACE, TEXT } from './type';

let Index = 0;
/**
 * diff算法
 * @param {*} oldTree 前一个虚拟dom对象
 * @param {*} newTree 需要更新的虚拟dom对象
 */
function diff(oldTree, newTree) {
    let patchs = {},
        index = 0;// 记录树的索引
    walk(oldTree, newTree, index, patchs);
    return patchs;
}

/**
 * 比较树
 * @param {*} oldNode 前一个虚拟dom对象
 * @param {*} newNode 需要更新的虚拟dom对象
 * @param {*} index 对比索引
 * @param {*} patchs 记录补丁
 */
function walk(oldNode, newNode, index, patchs) {
    let currentPatch = [];
    if(!newNode){
        currentPatch.push({ type: REMOVE, index })
    }
    // 判断当前文本是否一致
    else if (isString(oldNode) && isString(newNode) && oldNode !== newNode) {
        currentPatch.push({ type: TEXT, text: newNode })
    }
    // 如果类型一样就去比较属性
    else if (oldNode.type === newNode.type) {
        // 比较属性
        let attrs = diffAttr(oldNode.props, newNode.props);
        Object.keys(attrs).length > 0 && currentPatch.push({ type: ATTRS, attrs });

        // 如果有儿子节点就去遍历儿子节点
        diffChildren(oldNode.children, newNode.children, patchs);
    }else{
        // 节点被替换
        currentPatch.push({ type: REPLACE, newNode })
    }
    currentPatch.length > 0 && (patchs[index] = currentPatch);
}

/**
 * 比较孩子节点
 * @param {*} oldChildren 旧孩子节点 
 * @param {*} newChildren 新孩子节点
 * @param {*} patchs 记录补丁
 */
function diffChildren(oldChildren, newChildren, patchs) {
    // console.log('diffChildren',oldChildren, newChildren, index, patchs)
    oldChildren && oldChildren.forEach((child, idx) => {
        // console.log('oldChildren', child, newChildren[idx], index, ++index, patchs)
        walk(child, newChildren[idx], ++Index, patchs);
    });
}

/**
 * 判断节点是否是string
 * @param {*} node 节点
 */
function isString(node) {
    return Object.prototype.toString.call(node) === '[object String]';
}

/**
 * 比较属性
 * @param {*} oldAttrs 旧属性
 * @param {*} newAttrs 新属性
 * @returns 
 */
function diffAttr(oldAttrs, newAttrs) {
    let patch = {};

    for (const key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }

    // 新增的属性
    for (const key in newAttrs) {
        if (!Object.hasOwnProperty.call(oldAttrs, key)) {
            patch[key] = newAttrs[key];
        }
    }

    return patch;
}



export default diff;