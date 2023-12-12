import profileReducer, {addPostActionCreator, changeNewTextActionCreator, ProfilePage} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: State
    rerenderEntireTree: () => void
    addMessage: () => void
    updateMessage: (newMes: string) => void
    subscribe: (observer: () => void) => void
    getState: () => State
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!!!', likesCount: 2},
                {id: 2, message: 'How old are you?', likesCount: 10},
                {id: 3, message: 'Where are you from?', likesCount: 5},

            ],
            newPostText: "",
            profile: {
                userId: 2,
                lookingForAJob: true,
                lookingForAJobDescription: "",
                fullName: "",
                contacts: {
                    github: "",
                    vk: "",
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    website: "",
                    youtube: "",
                    mainLink: "",
                },
                photos: {
                    small: "",
                    large: "",
                }
            }
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
            newMessageBody: ""
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
        console.log("State is here")
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 5, message: this._state.messagePage.newMessageBody
        }
        this._state.messagePage.message.push(newMessage)
        this._state.messagePage.newMessageBody = ""
        this.rerenderEntireTree()
    },
    updateMessage(newMes: string) {
        this._state.messagePage.newMessageBody = newMes
        this.rerenderEntireTree()
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

            this.rerenderEntireTree()
    }
}


export type Post = {
    id: number
    message: string
    likesCount: number
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
    newMessageBody: string
}

export type SideBar = {
    friends: Friends[]
}

export type Friends = {
    id: number
    name: string
}

//  window.store = store
