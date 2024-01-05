import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessagePage} from "../../redux/dialog-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogsProps = {
    state: MessagePage
    addMessage: (values: { newMessageBody: string }) => void
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.state.dialogs.map(el =>
        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )

    let messageElements = props.state.message.map(el =>
        <Message key={el.id} message={el.message}/>
    )

    const addNewMessage = (values: any) =>
    props.addMessage(values.newMessageBody)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

export type AddMessageFormType = {
    newMessageBody: string;
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component= {Textarea}
                       name={"newMessageBody"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)


