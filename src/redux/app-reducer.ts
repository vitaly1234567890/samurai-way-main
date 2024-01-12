import {getAuthUserDataThunk} from "./auth-reducer";

export type ActionsTypes =
    ReturnType<typeof initializedSuccess>

const SET_INITIALIZED = "SET_INITIALIZED"

export type appType = {
    initialized: boolean
}


let initialState = {
    initialized: false
}

export const appReducer = (state: appType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    } as const
}

export const initializeApp = () => (dispatch: any) => {
   let promise = dispatch(getAuthUserDataThunk())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}


