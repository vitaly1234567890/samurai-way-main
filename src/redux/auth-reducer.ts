import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

export type ActionsTypes =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"

export type authType = {
    data: dataType
    resultCode: number
    messages: string[]
    url: string
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
        isAuth: false,
    },
    resultCode: 0,
    messages: [],
    url: ""
}

export const authReducer = (state: authType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data}
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, url: action.captchaUrl
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    } as const
}

export const getAuthUserDataThunk = (): AppThunk => async (dispatch) => {
    let res = await authAPI.getUsersHeader()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(response.data.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunk())
    }
    if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
    dispatch(stopSubmit("login", {_error: message}))
}

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}
