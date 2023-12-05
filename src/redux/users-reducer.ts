export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>


export type UserLocation = {
    city: string
    country: string
}

export type UsersType = {
    location: UserLocation;
    id: number
    name: string
    status: string
    folowed: boolean
    photos: {
        small: string
        large: string
    }
}

export type UsersPage = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        count: totalUsersCount
    } as const
}

export default usersReducer