import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import {User} from "./User";
import {Pagination} from "../common/pagination";
import s from "./users.module.css"

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
    onPageSizeChanged: (pageSize: number | string) => void
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
                                                    onPageSizeChanged
                                                }) => {

    const count = Math.ceil(totalUsersCount / pageSize)

    return (
        <div className={s.usersRoot}>
            {
                users.map(u => <User
                    key={u.id}
                    users={u}
                    followingInProgress={followingInProgress}
                    followThunk={followThunk}
                    unfollowThunk={unfollowThunk}/>
                )}
            <div className={s.pagination}>
                <Pagination count={count}
                            limit={pageSize}
                            onChange={onPageChanged}
                            page={currentPage}
                            perPageOptions={[5, 10, 20, 50, 100]}
                            perPage={pageSize}
                            onPerPageChange={onPageSizeChanged}
                />
            </div>
        </div>
    );
};
