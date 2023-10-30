import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {ProfilePage} from "../../../redux/State";


export const MyPosts = (props: ProfilePage) => {


    let postsElements = props.posts.map(l =>
        <Post posts={l} />
    )
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>
    );
};

