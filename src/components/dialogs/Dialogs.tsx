import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {
    ActionsTypes,
    MessagePage
} from "../../redux/State";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";


type DialogsProps = {
    state: MessagePage
    messageText: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )

    let messageElements = props.state.message.map(el =>
        <Message message={el.message}/>
    )

    const addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
        props.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea placeholder="Enter your message" value={props.messageText}
                              onChange={onChangeMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};


