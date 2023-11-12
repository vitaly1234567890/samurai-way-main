import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessagePage} from "../../redux/State";


type DialogsProps = {
    state: MessagePage
    addMessage: (mes: string) => void
    messageText: string
    updateMessage: (newMes: string) => void
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )

    let messageElements = props.state.message.map(el =>
        <Message message={el.message}/>
    )

    const addMessage = () => {
        props.addMessage(props.messageText)
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateMessage(e.currentTarget.value)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea value={props.messageText} onChange={onChangeMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

