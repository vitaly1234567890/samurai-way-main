export type StoreType = {
    _state: State
    updateNewPostText: (newText: string) => void
    rerenderEntireTree: () => void
    addPost: () => void
    addMessage: () => void
    updateMessage: (newMes: string) => void
    subscribe: (observer: ()=>void) => void
    getState: () => State
}

export const store: StoreType = {
    _state: {
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
            ],
            newMessage: ""
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
    },
    rerenderEntireTree() {
        console.log("State")
    },
    addPost () {
        const newPost: Post = {
            id: 5, message: this._state.profilePage.newPostText, likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this.rerenderEntireTree()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 5, message: this._state.messagePage.newMessage
        }
        this._state.messagePage.message.push(newMessage)
        this._state.messagePage.newMessage = ""
        this.rerenderEntireTree()
    },
    updateMessage(newMes: string) {
        this._state.messagePage.newMessage = newMes
        this.rerenderEntireTree()
    },
    subscribe (observer){
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
}



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
    newMessage: string
}

export type SideBar = {
    friends: Friends[]
}

export type Friends = {
    id: number
    name: string
}

//  window.store = store
