import React, { Component } from 'react';
import { Provider } from './context';

export default class HashRouter extends Component {

    state = {
        location: {
            pathName: window.location.hash.slice(1) || '/'
        }
    }

    componentDidMount() {
        window.location.hash = window.location.hash || '/';
        // 监听hash变化
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathName: window.location.hash.slice(1) || '/'
                }
            })
        })
    }

    render() {
        let { location } = this.state;
        return (
            <Provider value={{
                location,
                history: {
                    push(to) {
                        window.location.hash = to;
                    }
                }
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
