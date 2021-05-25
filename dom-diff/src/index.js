// const { createElement } = require("react");
// const { render } = require("react-dom");

import { createElement, render } from './element';
import diff from './diff';

let vertualDom1 = createElement('ul', { className: 'list' }, [
    createElement('li', { className: 'item' }, ['a']),
    createElement('li', { className: 'item' }, ['b']),
    createElement('li', { className: 'item' }, ['c'])])

let vertualDom2 = createElement('ul', { className: 'list-group' }, [
    createElement('li', { className: 'item' }, ['a']),
    createElement('li', { className: 'item' }, ['c']),
    createElement('li', { className: 'item' }, ['b'])])

let patchs = diff(vertualDom1, vertualDom2);
console.log(patchs);


// render(vertualDom, document.getElementById('root'));
let re = render(vertualDom1, document.getElementById('root'));
console.log(re);