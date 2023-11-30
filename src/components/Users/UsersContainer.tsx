import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUserAC, unfollowAC, UsersPage, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {StoreType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: UsersType[]
}
let mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch ) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUserAC(users))
        }
    }
}




export default connect (mapStateToProps, mapDispatchToProps) (Users)