import React from "react";
import s from './Information.module.scss'

export const Information = () => {
    return (
        <section className={s.info  + ' ' + s._wrapper}>
            <div className={s.info__container + ' ' + s._container}></div>
        </section>
    )
}