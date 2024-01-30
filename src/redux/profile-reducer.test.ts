import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello!!!', likesCount: 2},
        {id: 2, message: 'How old are you?', likesCount: 10},
        {id: 3, message: 'Where are you from?', likesCount: 5},
    ],
    profile: {
        aboutMe: '',
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
    },
    status: ''
}

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

it ('posts should be added', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

it ('posts should be deleted', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

it ("posts shouldn't be deleted if ID incorrect", () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})