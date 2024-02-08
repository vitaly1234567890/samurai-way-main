import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileUser} from "../../redux/profile-reducer";
import classes from "./Profile.module.css";

export type ProfileType = {
    profile: ProfileUser
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileUser) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={classes.main}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

