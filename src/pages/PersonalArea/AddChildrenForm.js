import axios from "axios";
import React, { useState } from "react";

export const AddChildrenForm = ({ userId, visibleForm, setVisibleForm }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  
  const addUserChildren = () => {
    axios
      .post(
        `https://nauchki.herokuapp.com/children/${userId}`,
        { name: name, gender: gender, dateOfBirth: dateOfBirth },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      });
  };

  const onChangeValue = (event) => {
    setGender(event.target.value);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button onClick={() => setVisibleForm(!visibleForm)}>x</button>
      <br />
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <br />
      {/* <input placeholder="gender" onChange={(e) => setGender(e.target.value)} /> */}
      <div onChange={onChangeValue}>
        <input type="radio" value="Муж" name="gender" /> Муж
        <input type="radio" value="Жен" name="gender" /> Жен
      </div>
      <br />
      <input
        placeholder="01.01.2021"
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <button onClick={addUserChildren} type="submit">
        Добавить ребенка
      </button>
    </form>
  );
};
