import { Input } from "../../UI/Input";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../UI/Form";
import { MainContainer } from "../../UI/MainContainer";
import { PrimaryButton } from "../../UI/PrimaryButton";
import { LogDataProvider } from "./DataContextLog";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { toggleAuthAC, getUserDataAC } from "../../store/userReducer";
import { LoginAPI, UserAPI } from "../../api/api";

const schema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

export const LogIn = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const getUser = (userData) => {
    dispatch(getUserDataAC(userData));
    dispatch(toggleAuthAC(true));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await LoginAPI.auth(data.login, data.password);

    await UserAPI.getAuthUser(data.login, data.password)
      .then((res) => {
        getUser(res.data);
        history.push("/personalArea");
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
    <LogDataProvider>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="login_title">Вход</h1>
          <Input
            {...register("login")}
            id="login"
            type="text"
            name="login"
            placeholder="login"
            autoComplete="on"
            error={!!errors.login}
          />
          <p className="errorText">{errors?.login?.message}</p>
          <Input
            {...register("password")}
            id="password"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="on"
            error={!!errors.password}
          />
          <p className="errorText">{errors?.password?.message}</p>

          <PrimaryButton>Войти</PrimaryButton>
          <div className="routerLinkAuth">
            <NavLink className="routerLinkAuth-text" to="/registration">Регистарция</NavLink>
          </div>
        </Form>
      </MainContainer>
    </LogDataProvider>
  );
};
