import {rerenderEntireTree} from "../render";

export type Post = {
    id: number
    message: string
    likesCount: number
}


export type ProfilePage = {
    posts: Post[];
    newPostText: string
}

export type State = {
    messagePage: MessagePage
    profilePage: ProfilePage
    sideBar: SideBar
}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


export type MessagePage = {
    dialogs: DialogsType[];
    message: MessageType[];
}

export type SideBar = {
    friends: Friends[]
}

export type Friends = {
    id: number
    name: string
}

export const addPost = (text: string) => {
    const newPost: Post = {
        id: 5, message: state.profilePage.newPostText, likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const state: State = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!!!', likesCount: 2},
            {id: 2, message: 'How old are you?', likesCount: 10},
            {id: 3, message: 'Where are you from?', likesCount: 5},

        ],
        newPostText: "It-Camasutra"
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Hello!'},
            {id: 4, message: 'yo'},
        ]
    },

    sideBar: {
        friends: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ]
    }
}

