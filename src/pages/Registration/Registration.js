import React from "react";
import { DataProvider } from "./DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../UI/PrimaryButton";
import s from "./Registration.module.scss";
import { Form } from "../../UI/Form";
import { Input } from "../../UI/Input";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { RegistartionAPI } from "../../api/api";

const schema = yup.object({
  username: yup.string().required("login - обязательное поле"),
  login: yup
    .string()
    .required("login - обязательное поле")
    .matches(/^([^0-9]*)$/, "login не должен сдержать цифры"),
  password: yup
    .string()
    .required("password - обязательное поле")
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      "Пароль должен содержать не менее 6 символов, включать в себя цифры, спец. символы, латиницу, строчные и прописные символы"
    ),
  number: yup
    .string()
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      "Номер телефона должен быть валидным"
    ),
  email: yup.string().matches(/.+@.+\..+/i, "email должен содержать @"), // проверять будем отправкой письма на почту (Раиль)
});

export const Registration = () => {
  let history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    RegistartionAPI.registartion(
      data.email,
      data.login,
      data.number,
      data.password,
      data.username
    )
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        if (err.response) {
          alert("client received an error response (5xx, 4xx)"); // обработать для UI
        } else if (err.request) {
          alert("client never received a response, or request never left"); // обработать для UI
        } else {
          alert("anything else"); // обработать для UI
        }
      });
  };

  return (
    <DataProvider>
      <div className={s._wrapper}>
        <div className={s.formBlock}>
          <h2>Регистрация</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("username", { required: true })}
              id="username"
              type="username"
              /* label="password"  */
              name="username"
              placeholder="username"
              autoComplete="on"
              error={!!errors.username}
            />
            <p className={s.errorText}>{errors?.username?.message}</p>

            <Input
              {...register("login")}
              id="login"
              type="text"
              /* label="login"  */
              placeholder="login"
              name="login"
              autoComplete="on"
              error={!!errors.login}
            />
            <p className={s.errorText}>{errors?.login?.message}</p>

            <Input
              {...register("password", { required: true })}
              id="password"
              type="password"
              /* label="password"  */
              name="password"
              placeholder="password"
              autoComplete="on"
              error={!!errors.password}
            />
            <p className={s.errorText}>{errors?.password?.message}</p>

            <Input
              {...register("number")}
              id="number"
              type="tel"
              /* label="number" */
              placeholder="number"
              name="number"
              autoComplete="on"
              error={!!errors.number}
            />
            <p className={s.errorText}>{errors?.number?.message}</p>

            <Input
              {...register("email")}
              id="email"
              type="text"
              /* label="email" */
              name="email"
              placeholder="email"
              autoComplete="on"
              error={!!errors.email}
            />
            <p className={s.errorText}>{errors?.email?.message}</p>
            <PrimaryButton>Отправить</PrimaryButton>
            <NavLink className={s.routerLinkAuth} to="/login">
              Вход
            </NavLink>
          </Form>
        </div>
      </div>
    </DataProvider>
  );
};
