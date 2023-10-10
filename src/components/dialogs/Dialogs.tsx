import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number

}

type MessageProps = {
    message: string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageProps) => {
    return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Victor'} id={5}/>
                <DialogItem name={'Valera'} id={6}/>
            </div>
            <div className={s.messages}>
              <Message message={"Hi"}/>
              <Message message={"How is your it-kamasutra"}/>
              <Message message={"Hello!"}/>
              <Message message={"yo"}/>
            </div>
        </div>
    );
};

