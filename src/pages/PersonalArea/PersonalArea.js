import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./PersonalArea.module.scss";
import { useDispatch } from "react-redux";
import { toggleAuthAC } from "../../store/userReducer";
import { useHistory } from "react-router";
import axios from "axios";
import { AddChildrenForm } from "./AddChildrenForm";
import { getChildrenAC } from "../../store/childrenReducer";

export const PersonalArea = () => {
  const user = useSelector((state) => state.user.userData);
  const children = useSelector((state) => state.children.children);

  const [visibleForm, setVisibleForm] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const exitHandler = () => {
    dispatch(toggleAuthAC(false));
    history.push("/");
  };

  const getChildrenData = (userData) => {
    dispatch(getChildrenAC(userData));
  };

  const getUserChildren = () => {
    axios
      .get(`https://nauchki.herokuapp.com/getchildren/${user.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        getChildrenData(res.data);
      });
  };

  return (
    <div className={s._wrapper}>
      <button onClick={exitHandler}>Выйти</button>
      <h2>О пользователе</h2>
      <div>email:{user.email}</div>
      <div>id:{user.id}</div>
      <div>login:{user.login}</div>
      <div>name:{user.username}</div>
      <div>number:{user.number}</div>
      ------------------------------------------------------------------
      <div>
        <h2>Данные о детях пользователя</h2>
        <button onClick={getUserChildren}>
          Обновить данные о детях пользователя в консоль
        </button>
        {children.map((child) => (
          <li key={child.id}>
            <div>{child.name}</div>
            <div>{child.gender}</div>
            <div>{child.dateOfBirth}</div>
          </li>
        ))}
      </div>
      <br />
      ------------------------------------------------------------------
      <br />
      {visibleForm && (
        <AddChildrenForm
          userId={user.id}
          visibleForm={visibleForm}
          setVisibleForm={setVisibleForm}
        />
      )}
      {!visibleForm && (
        <button
          onClick={() => setVisibleForm(!visibleForm)}
          className={s.circle + " " + s.plus}
        ></button>
      )}
    </div>
  );
};
