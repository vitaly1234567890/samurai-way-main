import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    unfollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    unfollowThunk,
                                                    followThunk,
                                                }) => {
    return (
        <div>
            <Paginator pageSize={pageSize} totalItemCount={totalUsersCount}
                       currentPage={currentPage} onPageChanged={onPageChanged} portionSize= {10}/>
            {
                users.map(u => <User
                    key={u.id}
                    users={u}
                    followingInProgress={followingInProgress}
                    followThunk={followThunk}
                    unfollowThunk={unfollowThunk}/>
                )}
        </div>
    );
};
