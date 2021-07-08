import { pathToRegexp } from 'path-to-regexp';
import React, { Component } from 'react';
import { Consumer } from './context';

export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {state => {
                    console.log(state);
                    let { path, component: Component, extract = false } = this.props;
                    let pathName = state.location.pathName;
                    // 用path通过正则匹配路径 直接写===或者includes都不严谨 使用包path-to-regexp
                    if (pathToRegexp(path, [], { end: extract }).test(pathName)) {
                        return <Component></Component>
                    }
                    return null
                }}
            </Consumer>
        )
    }
}
