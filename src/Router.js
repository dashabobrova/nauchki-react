import React from "react";
import { Route } from 'react-router-dom';
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main";

export const Router = () => {
    return (
        <>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Main}/>
        </>
    )
}