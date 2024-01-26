import {sendMessageActionCreator} from "./dialog-reducer";
import {photoType, profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const savePhotoSuccess = (photos: photoType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}

export const getUsersProfileThunk = (userId: number): AppThunk => async (dispatch) => {
    const data = await usersAPI.getUsersProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: number): AppThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer