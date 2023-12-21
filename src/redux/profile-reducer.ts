import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialog-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof setUserProfile>;

export type Post = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePage = {
    posts: Post[];
    newPostText: string
    profile: ProfileUser
}

export type ProfileUser = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: 'Hello!!!', likesCount: 2},
        {id: 2, message: 'How old are you?', likesCount: 10},
        {id: 3, message: 'Where are you from?', likesCount: 5},
    ],
    newPostText: "",
    profile: {
        userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: "",
        }
    }
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
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
export const setUserProfile = (profile: ProfileUser) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUsersProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getUsersProfile(userId)
        .then(data => {
           dispatch(setUserProfile(data))
        })
}


export default profileReducer