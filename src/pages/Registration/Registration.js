import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { DataProvider } from "./DataContext";
import { RegHeader } from "./RegHeader";
import { Step1 } from "./Step1";


const Result = () => <>Result</>;

export const Registration = () => {
    return (
        <DataProvider>
        <RegHeader />
        <Router>
            <Switch>
                <Route exact path='/registration' component={Step1} />
                <Route path='/registration/result' component={Result} />
            </Switch>
        </Router>
        </DataProvider>
        
    )
}