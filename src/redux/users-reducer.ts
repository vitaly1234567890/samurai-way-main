import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";

export type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>

export type UserLocation = {
    city: string
    country: string
}

export type UsersType = {
    location: UserLocation;
    id: number
    name: string
    status: string
    followed: boolean
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
    isFetching: boolean
    followingInProgress: number[]
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [{
        location: {
            city: '',
            country: '',
        },
        id: 1,
        name: '',
        status: '',
        followed: false,
        photos: {
            small: '',
            large: '',
        }
    }],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state: UsersPage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
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
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleIsFollowingProgressAC = (followingInProgress: number[], userId: number, isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId,
        isFetching
    } as const
}

export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUserAC(res.data.items))
    dispatch(setUsersTotalCountAC(res.data.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgressAC([], userId, true))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgressAC([], userId, false))
}

export const followThunk = (userId: number): AppThunk => async (dispatch) => {
   await followUnfollowFlow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followAC)
}

export const unfollowThunk = (userId: number): AppThunk => async (dispatch) => {
   await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUsers.bind(usersAPI), unfollowAC)
}

export default usersReducer