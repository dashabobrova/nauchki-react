import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleAuthAC } from "../../store/userReducer";
import { useHistory } from "react-router";
import axios from "axios";
import { AddChildrenForm } from "./AddChildrenForm";
import { getChildrenAC } from "../../store/childrenReducer";
import { ChildCard } from "../../components/ChildCard/ChildCart";

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
        console.log(children);
        getChildrenData(res.data);
      });
  };

  useEffect(() => {
    getUserChildren()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="_wrapper">
      <div className="personalArea_container">
        <h1 className="personalArea__title">Мой кабинет</h1>
        <div className="personalArea__parent">
          <button onClick={exitHandler}>Выйти</button>
          <h2>О пользователе</h2>
          <div>email:{user.email}</div>
          <div>id:{user.id}</div>
          <div>login:{user.login}</div>
          <div>name:{user.username}</div>
          <div>number:{user.number}</div>
        </div>
        <div className="personalArea__main">
          <h1 className="personalArea__title-children">
            Мои дети {!visibleForm && (
        <button
          onClick={() => setVisibleForm(!visibleForm)}
          className="circle"
        ></button>
      )}
      {visibleForm && (
        <AddChildrenForm
          userId={user.id}
          visibleForm={visibleForm}
          setVisibleForm={setVisibleForm}
          getUserChildren={getUserChildren}
        />
      )}
          </h1>

          <ul className="personalArea__children-container ">
            {children && children.map((child) => (
              <ChildCard key={child.id} child={child}/>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <br />
      
      
    </div>
  );
};
