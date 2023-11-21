import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessagePage} from "../../redux/dialog-reducer";

type DialogsProps = {
    state: MessagePage
    addMessage: () => void
    onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(el =>
        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )

    let messageElements = props.state.message.map(el =>
        <Message key={el.id} message={el.message}/>
    )

    const addMessage = () => {
        props.addMessage()
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
        props.onChangeMessage(e)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea placeholder="Enter your message" value={props.state.newMessageBody}
                              onChange={onChangeMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};


