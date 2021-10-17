import React from "react";
import { Route } from 'react-router-dom';
import { Registration } from "./pages/Registration/Registration"
import { Main } from "./pages/Main/Main";

export const Router = () => {
    return (
        <>
            <Route path="/registration" component={Registration}/>
            <Route exact path="/" component={Main}/>
        </>
    )
}