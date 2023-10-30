
export type post = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePage = {
    posts: post[];
}

export type state = {
    messagePage: MessagePage
    profilePage: ProfilePage
}

export type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}


export type MessagePage = {
    dialogs: dialogsType[];
    message: messageType[];
}


export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!!!', likesCount: 2},
            {id: 2, message: 'How old are you?', likesCount: 10},
            {id: 3, message: 'Where are you from?', likesCount: 5},

        ],
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
    }
}