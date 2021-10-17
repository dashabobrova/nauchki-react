import { Input } from "./Input";
import React from "react";
import { Form } from "./Form";
import { MainContainer } from "./MainContainer";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import s from './Registration.module.scss';
//import { useHistory } from "react-router-dom"; //это если несколько этапов => мне пока не надо
//import * as axios from "axios";
//import axios from "axios";
import axios from 'axios';

export const Step1 = () => {

    //const history = useHistory();

    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: "onBlur",
    })
        
    const onSubmit = (data) => {
        axios.post('https://nauchki.herokuapp.com/registration',{
            Email: data.Email,
            login: data.login,
            number: data.number,
            password: data.password,
            secretAnswer: data.secretAnswer
        })
        .then(function (response) {
            console.log(response);
        })
        console.log(data)
    }

    return (
        <MainContainer>
            <div></div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    {...register("login", { required: true })} 
                    id="login" type="text" 
                    label="login" 
                    name="login"
                /> {errors.login?.type === 'required' && <p className={s.validationError}>login is required</p>}

                <Input 
                    {...register('password', { required: true })} 
                    id="password" 
                    type="password" 
                    label="password" 
                    name="password"
                /> {errors.password?.type === 'required' && <p className={s.validationError}>password is required</p>}
                
                <Input 
                    {...register('secretAnswer', { required: true })} 
                    id="secretAnswer" 
                    type="text" 
                    label="secretAnswer" 
                    name="secretAnswer"
                /> {errors.password?.type === 'required' && <p className={s.validationError}>secretAnswer is required</p>}

                <Input 
                    {...register('number')} 
                    id="number" 
                    type="tel" 
                    label="number" 
                    name="number"
                /> {/* необязательнео поле */}

                <Input 
                    {...register('Email')} 
                    id="Email" 
                    type="text" 
                    label="Email" 
                    name="Email"
                /> {/* необязательнео поле */}

                <PrimaryButton>Next</PrimaryButton>
            </Form>
            
        </MainContainer>
    )
}

/* Уважаемая публика, сейчас нужно yupResolver доставать из @hookform/resolvers/yup, а ошибки получать из formState:{ errors } 
пока сделала простейшую валидацию - просто сообщение */