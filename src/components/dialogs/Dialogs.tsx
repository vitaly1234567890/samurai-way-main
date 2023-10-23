import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {dialogsDataPropsType} from "../../index";


export const Dialogs = (props: dialogsDataPropsType) => {

    let dialogsElements = props.dialogsData.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )



    let messageElements = props.messageData.map(el =>
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

