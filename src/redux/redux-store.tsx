import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let rootReducer = combineReducers({
    messagePage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
})

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store;
