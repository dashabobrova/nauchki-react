import React from "react";
import { Route } from "react-router-dom";
import { Registration } from "./pages/Registration/Registration";
import { Main } from "./pages/Main/Main";
import { LogIn } from "./pages/LogIn/LogIn";
import { PersonalArea } from "./pages/PersonalArea/PersonalArea";
import { Adminka } from "./pages/Adminka/Adminka";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";

export const Router = () => {
  /* const isAuth = useSelector((state) => state.user.isAuth); */
  return (
    <>
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={LogIn} />

      <PrivateRoute path="/personalArea" component={PersonalArea} />
      <PrivateRoute path="/adminka" component={Adminka} />

      <Route exact path="/" component={Main} />
    </>
  );
};