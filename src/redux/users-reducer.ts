export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>


export type UserLocation = {
    city: string
    country: string
}

export type UsersType = {
    location: UserLocation;
    id: number
    fullName: string
    status: string
    folowed: boolean
    photoUrl: string
}

export type UsersPage = {
    users: UsersType[]
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    users: []
}

export const usersReducer = (state: UsersPage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, folowed: true} : u)]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, folowed: false} : u)]
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUserAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export default usersReducer