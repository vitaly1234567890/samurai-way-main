import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileUser} from "../../redux/profile-reducer";

export type ProfileType = {
    profile: ProfileUser
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};

