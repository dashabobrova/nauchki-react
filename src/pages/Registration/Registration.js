import React from "react";
import {Route} from 'react-router-dom';
import { DataProvider } from "./DataContext";
import { Step1 } from "./Step1";

export const Registration = () => {
    return (
        <DataProvider>
            <Route exact path='/registration' component={Step1} />
        </DataProvider>
        
    )
}