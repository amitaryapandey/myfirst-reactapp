import React, { Component } from 'react';
import Logout from './Components/Logout';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel/AdminPanel'
import PageError from './Components/PageError'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route  path="/Logout" component={Logout}/>
            <Route  path="/AdminPanel" component={AdminPanel}/>
            <Route component={PageError}/>
          </Switch>
      </Router>
      </div>
    )
  }
}