import { ATTRS, REMOVE, REPLACE, TEXT } from './type';

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
    // 如果类型一样就去比较属性
    if (oldNode.type === newNode.type) {
        // 比较属性
        let attrs = diffAttr(oldNode.props, newNode.props);

        Object.keys(attrs).length > 0 && currentPatch.push({ type: ATTRS, attrs });
    }
    currentPatch.length > 0 && (patchs[index] = currentPatch);
}

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