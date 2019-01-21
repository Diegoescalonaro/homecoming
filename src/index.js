import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Portal from './components/Portal';
import Ranking from './components/Ranking';
import Group from './components/Group';
import * as serviceWorker from './serviceWorker';

import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

ReactDOM.render(
    <Router>
    <Switch>
    <Route path='/home' component={Home} exact={true}/>
    <Route path="/portal/" component={Portal}/>
    <Route path="/ranking/" component={Ranking}/>
    <Route path="/group/" component={Group}/>
    <Redirect to='/home' />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
