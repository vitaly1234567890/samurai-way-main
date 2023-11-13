import {ActionsTypes, Post, ProfilePage} from "./State";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

const profileReducer = (state: ProfilePage, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: Post = {
                id: 5, message: state.newPostText, likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
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