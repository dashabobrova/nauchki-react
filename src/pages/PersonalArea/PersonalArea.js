import React from "react";
import { useSelector } from "react-redux";
import s from './PersonalArea.module.scss';
export const PersonalArea = () => {
    const user = useSelector(state => state.user.userData);
    console.log(user);

    return (
        <div className={s._wrapper}> 
        <h1>PersonalArea</h1>

        <div>{user.email}</div>
        <div>{user.id}</div>
        <div>{user.login}</div>
        <div>{user.name}</div>
        <div>{user.number}</div>
        <div>{user.password}</div>
        <div>{user.secretAnswer === null ? 'нет' : user.secretAnswer}</div>
        <div>{user.secretQuestion === null ? 'нет' : user.secretQuestion}</div>

        </div>
    )
}