import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    messagePage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AnyAction>

// @ts-ignore
window.store = store;
