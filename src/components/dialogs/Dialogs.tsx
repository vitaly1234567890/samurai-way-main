import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessagePage} from "../../redux/State";


export const Dialogs = (props: MessagePage) => {

    let dialogsElements = props.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )



    let messageElements = props.message.map(el =>
        <Message message={el.message}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

