## create-react-app diff-dom

## createElement(type, props, childrens)

## diff更新规则

1. 当节点类型相同时，去查找属性是否相同；若不相同产生一个属性的补丁包，类似于{type:'ATTRS', attrs:{class:'list-group'}}
2. 新的dom不存在时{type:'REMOVE', index:xxx}
3. 节点类型不相同时，直接采用替换模式 {type:'REPLACE', newNode:newNode}
4. 文本的变化 {type:'TEXT',text:1}
