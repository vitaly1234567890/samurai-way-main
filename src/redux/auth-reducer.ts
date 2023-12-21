import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ActionsTypes =
    ReturnType<typeof setAuthUserData>


const SET_USER_DATA = "SET_USER_DATA"

export type authType = {
    data: dataType
    resultCode: number
    messages: string[]
    isAuth: boolean
}

export type dataType = {
    id: number
    email: string
    login: string
}

let initialState = {
    data:{
        id: 2,
        email: "",
        login: "",
    },
    resultCode: 0,
    messages: [],
    isAuth: false
}

export const authReducer = (state: authType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: dataType) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}

export const getAuthUserDataThunk = () => (dispatch: Dispatch) => {
    usersAPI.getUsersHeader()
        .then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthUserData(data.data))
            }
        })
}


