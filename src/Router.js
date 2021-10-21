import React from "react";
import { Route } from 'react-router-dom';
import { Registration } from "./pages/Registration/Registration"
import { Main } from "./pages/Main/Main";
import { LogIn } from "./pages/LogIn/LogIn";
import { PersonalArea } from "./pages/PersonalArea/PersonalArea";
import { Adminka } from "./pages/Adminka/Adminka";

export const Router = () => {
    return (
        <>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/personalArea" component={PersonalArea}/>
            <Route path="/adminka" component={Adminka}/>
            <Route exact path="/" component={Main}/>
        </>
    )
}