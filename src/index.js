import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from "./views/Main";
import Home from "./views/Home";

import * as serviceWorker from './serviceWorker';
import './styles/index.css';

function AppRoutes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/inside" component={Home} />
            <Route component={() => (<Redirect to='/' />)} /> 
        </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<AppRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
