// const { createElement } = require("react");
// const { render } = require("react-dom");

import { createElement, render } from './element';
import patch from './patch';
import diff from './diff';

let vertualDom1 = createElement('ul', { className: 'list' }, [
    createElement('li', { className: 'item' }, ['a']),
    createElement('li', { className: 'item' }, ['b']),
    createElement('li', { className: 'item' }, ['c'])])

let vertualDom2 = createElement('ul', { className: 'list-group' }, [
    createElement('li', { className: 'item' }, ['2']),
    createElement('li', { className: 'item' }, ['b'])])

// render(vertualDom, document.getElementById('root'));
let el = render(vertualDom1, document.getElementById('root'));

let patchs = diff(vertualDom1, vertualDom2);
console.log(patchs);

patch(el, patchs);