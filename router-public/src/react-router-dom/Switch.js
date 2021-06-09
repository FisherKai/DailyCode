import { pathToRegexp } from 'path-to-regexp';
import React, { Component } from 'react';
import { Consumer } from './context';

export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {state => {
                    let pathName = state.location.pathName;
                    let children = this.props.children;
                    for (let index = 0; index < children.length; index++) {
                        const element = children[index];
                        let path = element.props.path || '';

                        if (pathToRegexp(path, [], { end: false }).test(pathName)) {
                            return element;
                        }
                        return null;
                    }
                }}
            </Consumer>
        )
    }
}
