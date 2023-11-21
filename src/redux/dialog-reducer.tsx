import {addPostActionCreator, changeNewTextActionCreator} from "./profile-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

export type MessageType = {
    id: number
    message: string
}

export type MessagePage = {
    dialogs: DialogsType[];
    message: MessageType[];
    newMessageBody: string
}

export type DialogsType = {
    id: number
    name: string
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Hello!'},
            {id: 4, message: 'yo'},
        ],
        newMessageBody: ""
    }
const dialogsReducer = (state: MessagePage = initialState, action: ActionsTypes): MessagePage => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            const body = state.newMessageBody
            return {...state,
                newMessageBody: '',
                message: [...state.message, {id: 5, message: body}]}
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export default dialogsReducer