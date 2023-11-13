import {ActionsTypes, MessagePage} from "./State";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state: MessagePage, action: ActionsTypes) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ""
            state.message.push({id: 5, message: body})
            return state
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