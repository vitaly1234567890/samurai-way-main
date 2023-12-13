export type ActionsTypes =
    ReturnType<typeof setAuthUserData>


const SET_USER_DATA = "SET_USER_DATA"

export type authType = {
    data:{
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
    isAuth: boolean
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

export const setAuthUserData = (data: authType) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}


