import {addPostActionCreator} from "./profile-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

export type MessageType = {
    id: number
    message: string
}

export type MessagePage = {
    dialogs: DialogsType[];
    message: MessageType[];
}

export type DialogsType = {
    id: number
    name: string
}

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
        ]
    }
const dialogsReducer = (state: MessagePage = initialState, action: ActionsTypes): MessagePage => {
    switch (action.type){
        case SEND_MESSAGE:
            const body = action.newMessageBody
            return {...state,
                message: [...state.message, {id: 5, message: body}]}
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

export default dialogsReducer