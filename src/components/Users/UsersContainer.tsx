import {connect} from "react-redux";
import {
    followAC,
    followThunk,
    getUsersThunk,
    setCurrentPageAC,
    unfollowAC, unfollowThunk,
    UsersType
} from "../../redux/users-reducer";
import {StoreType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsersThunk: (currentPage: number, pageSize: number) => void
    unfollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
            />
        </>
    }
}

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
let mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow: followAC, unfollow: unfollowAC, setCurrentPage: setCurrentPageAC,
            getUsersThunk, followThunk, unfollowThunk
        })
)(UsersContainer)
