import { Input } from "../../UI/Input";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../UI/Form";
import { MainContainer } from "../../UI/MainContainer";
import { PrimaryButton } from "../../UI/PrimaryButton";
import { LogDataProvider } from "./DataContextLog";
import s from './LogIn.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import { getUserDataAC } from "../../store/userReducer";

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })

export const LogIn = () => {
    let history = useHistory();

    const dispatch = useDispatch();

    const getUser = (userData) => {
        dispatch(getUserDataAC(userData))
    }

    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = async(data) => {
        const dataForm = new FormData();
        dataForm.append('username', data.username);
        dataForm.append('password', data.password);

        await axios.post('https://nauchki.herokuapp.com/login', 
            dataForm, 
            {
                withCredentials: true,
            }
        ) 
       
        await axios.get('https://nauchki.herokuapp.com/getuser',
        {
            withCredentials: true
        }
        ) 
        .then(res => {
            getUser(res.data);
            history.push("/personalArea"); 
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
        <LogDataProvider>
             <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Вход</h1>
                <Input
                    {...register("username")} 
                    id="username" type="text" 
                    label="username" 
                    name="username"
                    autoComplete="on"
                    error={!!errors.username}
                    helperText={errors?.username?.message}
                />
                <Input 
                    {...register("password")} 
                    id="password" type="password" 
                    label="password" 
                    name="password"
                    autoComplete="on"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                /> 
                
                <PrimaryButton>Отправить</PrimaryButton>
                <NavLink className={s.routerLinkAuth} to="/registration">Регистарция</NavLink>
                
            </Form>  
        </MainContainer>
        </LogDataProvider>
    )
}