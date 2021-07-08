import React, { Component } from 'react';
import { Link, Route } from './react-router-dom';
import UserAdd from './useradd';
import UserList from './userlist';

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li><Link to="/user/add">UserAdd</Link></li>
                        <li><Link to="/user/list">UserList</Link></li>
                    </div>
                </div>
                <div className="col-md-10">
                    <Route path='/user/add' component={UserAdd} />
                    <Route path='/user/list' component={UserList} />
                </div>
            </div>
        )
    }
}
