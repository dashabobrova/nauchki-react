import React from "react";
import { DataProvider } from "./DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../UI/PrimaryButton";
import s from './Registration.module.scss';
import axios from 'axios';
import { Form } from "../../UI/Form";
import { Input } from "../../UI/Input";
import { useHistory } from "react-router";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { NavLink } from "react-router-dom";

const schema = yup.object({
    login: yup
        .string()
        .required('login - обязательное поле')
        .matches(/^([^0-9]*)$/, 'login не должен сдержать цифры'),
    password: yup
        .string()
        .required('password - обязательное поле')
        .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 'Пароль должен содержать не менее 6 символов, включать в себя цифры, спец. символы, латиницу, строчные и прописные символы'),
    secretAnswer: yup
        .string()
        .required('secretAnswer - обязательное поле'),
    number: yup
        .string()
        .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 'Номер телефона должен быть валидным'),
    Email: yup
        .string()
        .matches(/.+@.+\..+/i, 'Email должен содержать @') // проверять будем отправкой письма на почту (Раиль)
  })
  

export const Registration = () => {
    let history = useHistory();

    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        axios.post('https://nauchki.herokuapp.com/registration',
            {
                Email: data.Email,
                login: data.login,
                number: data.number,
                password: data.password,
                secretAnswer: data.secretAnswer
            },
            {withCredentials: true}
        )
        .then(res => {
            console.log(res);
            history.push("/login");
        })
        .catch(err => { 
            if (err.response) { 
                alert('client received an error response (5xx, 4xx)') // обработать для UI 
            } else if (err.request) { 
                alert('client never received a response, or request never left') // обработать для UI 
            } else { 
                alert('anything else') // обработать для UI 
            } 
        })
    }

    return (
        <DataProvider>
            <div className={s._wrapper}>
                <div className={s.formBlock}>
                    <h2>Регистрация</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register("login")} 
                        id="login" type="text" 
                        label="login" 
                        name="login"
                        autoComplete="on"
                        error={!!errors.login}
                        helperText={errors?.login?.message}
                    />

                    <Input 
                        {...register('password', { required: true })} 
                        id="password" 
                        type="password" 
                        label="password" 
                        name="password"
                        autoComplete="on"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    
                    <Input 
                        {...register('secretAnswer', { required: true })} 
                        id="secretAnswer" 
                        type="text" 
                        label="secretAnswer" 
                        name="secretAnswer"
                        autoComplete="on"
                        error={!!errors.secretAnswer}
                        helperText={errors?.secretAnswer?.message}
                    /> 

                    <Input 
                        {...register('number')} 
                        id="number" 
                        type="tel" 
                        label="number" 
                        name="number"
                        autoComplete="on"
                        error={!!errors.number}
                        helperText={errors?.number?.message}
                    />

                    <Input 
                        {...register('Email')} 
                        id="Email" 
                        type="text" 
                        label="Email" 
                        name="Email"
                        autoComplete="on"
                        error={!!errors.Email}
                        helperText={errors?.Email?.message}
                    />
                    <PrimaryButton>Отправить</PrimaryButton>
                    <NavLink className={s.routerLinkAuth} to="/login">Вход</NavLink>
                </Form>
                </div>
            </div>
        </DataProvider>
        
    )
}