import React from "react";
import { useSelector } from "react-redux";
import s from "./PersonalArea.module.scss";
import { useDispatch } from "react-redux";
import { toggleAuthAC } from "../../store/userReducer";
import { useHistory } from "react-router";

export const PersonalArea = () => {
  const user = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();
  let history = useHistory();

  const exitHandler = () => {
    dispatch(toggleAuthAC(false));
    history.push("/");
  };

  return (
    <div className={s._wrapper}>
      <button onClick={exitHandler}>Выйти</button>

      <h1>PersonalArea</h1>

      <div>email:{user.email}</div>
      <div>id:{user.id}</div>
      <div>login:{user.login}</div>
      <div>name:{user.name}</div>
      <div>number:{user.number}</div>
    </div>
  );
};
