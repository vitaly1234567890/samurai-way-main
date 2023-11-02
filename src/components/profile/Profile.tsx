import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/State";


type ProfileProps = {
    state: ProfilePage
    addPost: () => void
    updateNewPostText: (postMessage: string) => void
    message: string
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.state.posts} updateNewPostText={props.updateNewPostText} message={props.message}/>
        </div>
    );
};

