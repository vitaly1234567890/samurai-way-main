import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePage} from "../../redux/State";


type ProfileProps = {
    state: ProfilePage
    message: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     message={props.message}
                     dispatch={props.dispatch}/>
        </div>
    );
};

