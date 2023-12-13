import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderType) => {
    return (
        <header className={classes.header}>
            <img src='https://www.legal.hireca.com/uploads/images/image_slider_2564_5a867f9983a54.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};

