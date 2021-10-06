import React from "react";
import s from './Header.module.scss';
import { FaRegUserCircle} from 'react-icons/fa';
import { AiOutlineHome} from 'react-icons/ai';
import { NavLink } from "react-router-dom";
  
export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content + ' ' + s._container}>
                <div className={s.header__title}><NavLink to="/">Научки</NavLink></div>
                <div>
                    <ul className={s.header__menu}>
                        <li className={s.header__menu_item}><NavLink to="/">О проекте</NavLink></li>
                        <li className={s.header__menu_item}><NavLink to="/">Тарифы</NavLink></li>
                        <li className={s.header__menu_item}><NavLink to="/">Источники данных</NavLink></li>
                        <li className={s.header__menu_item}><NavLink to="/">Обратная связь</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className={s.header__iconsmenu}>
                        <li className={s.header__iconsmenu_item}><NavLink to="/login" className={s.header__iconsmenu_btn}>Регистрация</NavLink></li>
                        <li className={s.header__iconsmenu_item}><NavLink to="/"><AiOutlineHome className={s.sizy}/></NavLink></li>
                        <li className={s.header__iconsmenu_item}><NavLink to="/"><FaRegUserCircle className={s.sizy}/></NavLink></li>
                    </ul>
                </div> 
            </div>
        </header>
    )
}