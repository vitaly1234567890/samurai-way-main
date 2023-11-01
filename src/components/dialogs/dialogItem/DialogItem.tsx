import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number

}

export const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + " " + s.active}>
        <img src="https://avatarko.ru/img/kartinka/9/muzhchina_kapyushon_serial_8126.jpg" alt=""/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


