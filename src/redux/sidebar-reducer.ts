import {ActionsTypes, SideBar} from "./state";

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]
}


const sidebarReducer = (state: SideBar = initialState, action: ActionsTypes) => {

    return state
}

export default sidebarReducer