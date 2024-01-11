import {sendMessageActionCreator} from "./dialog-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type Post = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePage = {
    posts: Post[];
    profile: ProfileUser
    status: string
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
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: 1, message: 'Hello!!!', likesCount: 2},
        {id: 2, message: 'How old are you?', likesCount: 10},
        {id: 3, message: 'Where are you from?', likesCount: 5},
    ],
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
    },
    status: ''
}

const profileReducer = (state: ProfilePage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: Post = {
                id: 5, message: action.newPostText, likesCount: 0
            }
            return {...state, newPostText: '', posts: [...state.posts, newPost]}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
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

export const setUserProfile = (profile: ProfileUser) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setStatus = (status:string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const getUsersProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getUsersProfile(userId)
        .then(data => {
           dispatch(setUserProfile(data))
        })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer