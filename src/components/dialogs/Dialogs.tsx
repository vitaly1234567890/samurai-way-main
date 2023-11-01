import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessagePage} from "../../redux/State";


type DialogsProps = {
    state: MessagePage
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )



    let messageElements = props.state.message.map(el =>
        <Message message={el.message}/>
    )


    const addNewMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        const text = addNewMessage.current ? addNewMessage.current.value : ""
        alert(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={addNewMessage}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    );
};

