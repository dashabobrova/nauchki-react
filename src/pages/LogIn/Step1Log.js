import { Input } from '../Registration/Input';
import { useForm } from "react-hook-form";
import { Form } from "../Registration/Form";
import { MainContainer } from "../Registration/MainContainer";
import { PrimaryButton } from "../Registration/PrimaryButton";
import axios from 'axios';
import s from './LogIn.module.scss';

export const Step1Log = () => {

    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: "onBlur",
    })

    const onSubmit = (data) => {
        const dataForm = new FormData();
        dataForm.append('username', data.username);
        dataForm.append('password', data.password);

        axios.post('https://nauchki.herokuapp.com/login', dataForm,
            /* или {
                username: data.username,
                password: data.password
            } */
            {
                withCredentials: true
            }
        )
        .then(function (response) {
            console.log(response);
        })
        console.log(data);
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    {...register("username")} 
                    id="username" type="text" 
                    label="username" 
                    name="username"
                /> {errors.username?.type === 'required' && <p className={s.validationError}>login is required</p>}
                <Input 
                    {...register("password")} 
                    id="password" type="password" 
                    label="password" 
                    name="password"
                /> {errors.password?.type === 'required' && <p className={s.validationError}>password is required</p>}
                <PrimaryButton>Next</PrimaryButton>
            </Form>  
        </MainContainer>
    )
}

