import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/image.png";
import { UsersType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UserPropsType = {
    users: UsersType;
    followingInProgress: number[];
    unfollowThunk: (userId: number) => void;
    followThunk: (userId: number) => void;
};

export const User: React.FC<UserPropsType> = ({
                                                  users,
                                                  followingInProgress,
                                                  unfollowThunk,
                                                  followThunk
                                              }) => {
    return (
        <div>
      <span>
        <div>
          <NavLink to={'/profile/' + users.id}>
            <img src={users.photos.small !== null ? users.photos.small : userPhoto}
                 className={styles.userPhoto}
                 alt=""
            />
          </NavLink>
        </div>
        <div>
          {users.followed ? (
              <button
                  disabled={followingInProgress.some(id => id === users.id)}
                  onClick={() => {
                      unfollowThunk(users.id);
                  }}
              >
                  Unfollow
              </button>
          ) : (
              <button
                  disabled={followingInProgress.some(id => id === users.id)}
                  onClick={() => {
                      followThunk(users.id);
                  }}
              >
                  Follow
              </button>
          )}
        </div>
      </span>
            <span>
        <div>{users.name}</div>
        <div>{users.status}</div>
      </span>
            <span>
        <div>{users.location && users.location.country}</div>
        <div>{users.location && users.location.city}</div>
      </span>
        </div>
    );
};
