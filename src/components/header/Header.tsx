import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string
    logout: ()=> void
}

export const Header = (props: HeaderType) => {
    return (
        <header className={classes.header}>
            <img src='https://www.legal.hireca.com/uploads/images/image_slider_2564_5a867f9983a54.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div> <p>user: {props.login}</p> <button onClick={props.logout} >Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};

