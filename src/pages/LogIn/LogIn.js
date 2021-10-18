import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LogDataProvider } from "./DataContextLog";
import { Step1Log } from "./Step1Log";

export const LogIn = () => {
    return (
        <LogDataProvider>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Step1Log} />
                </Switch>
            </Router>
        </LogDataProvider>
    )
}