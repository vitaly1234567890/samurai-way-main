import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type ActionsTypes =
    ReturnType<typeof setAuthUserData>

const SET_USER_DATA = "auth/SET_USER_DATA"

export type authType = {
    data: dataType
    resultCode: number
    messages: string[]
}

export type dataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialState = {
    data: {
        id: 2,
        email: "",
        login: "",
        isAuth: false
    },
    resultCode: 0,
    messages: [],
}

export const authReducer = (state: authType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data}
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    } as const
}

export const getAuthUserDataThunk = () => async (dispatch: Dispatch) => {
    let res = await authAPI.getUsersHeader()
    if (res.resultCode === 0) {
        let {id, login, email} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunk())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}
