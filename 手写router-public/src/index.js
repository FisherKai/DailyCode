import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom';
import Home from './home';
import Profile from './profile';
import User from './user';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-brand">老余</div>
                        </div>
                        <div className="nav navbar-nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/user">User</Link></li>
                        </div>



                    </div>
                    <div className="container">
                        <Switch>
                            <Route path='/profile' component={Profile} />
                            <Route path='/user' component={User} />
                            <Route path='/home' component={Home} />
                            <Redirect to="/home"></Redirect>
                        </Switch>
                    </div>
                </div>

            </Router>
        )
    }
}
render(<App></App>, window.root);
