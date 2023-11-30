import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialog-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

export type Post = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePage = {
    posts: Post[];
    newPostText: string
}

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

let initialState = {
        posts: [
            {id: 1, message: 'Hello!!!', likesCount: 2},
            {id: 2, message: 'How old are you?', likesCount: 10},
            {id: 3, message: 'Where are you from?', likesCount: 5},
        ],
        newPostText: ""
    }

const profileReducer = (state: ProfilePage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: Post = {
                id: 5, message: state.newPostText, likesCount: 0
            }
            return {...state, newPostText: '', posts: [...state.posts, newPost]}
        }
        case CHANGE_NEW_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const changeNewTextActionCreator = (text: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: text
    } as const
}

export default profileReducer