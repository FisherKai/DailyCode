import { renderDom, Element } from './element';
import { ATTRS, REMOVE, REPLACE, TEXT } from './type';

let allPatchs,
    index = 0;
/**
 * 更新节点
 * @param {*} el 节点
 * @param {*} patchs 补丁包
 */
function patch(el, patchs) {
    allPatchs = patchs;
    walk(el);
}

/**
 * 渲染
 * @param {*} node 
 */
function walk(node) {
    let currentPatch = allPatchs[index++];
    let childNodes = node.childNodes;
    childNodes.forEach(element => {
        walk(element)
    });

    /**
     * 因为先去执行了遍历子节点操作，递归调用walk，才执行了doPatch去更新，
     * 所以更新是先从子节点开始的，才会到父节点
     */
    if (currentPatch) {
        doPatch(node, currentPatch);
    }
}

/**
 * 更新
 * @param {*} node 
 * @param {*} currentPatch 
 */
function doPatch(node, patchs) {
    patchs && patchs.forEach(p => {
        switch (p.type) {
            case ATTRS:
                break;
            case REPLACE:
                console.log(node.parent)
                let newNode = (p.newNode instanceof Element) ? renderDom(p.newNode) :
                    document.createTextNode(p.newNode);
                console.log(newNode.parent)
                newNode.parent.replaceChild(newNode, node);
                break;
            case REMOVE:
                break;
            case TEXT:
                node.textContent = p.text;
                break;
            default:
                break;
        }
    })

}

export default patch;