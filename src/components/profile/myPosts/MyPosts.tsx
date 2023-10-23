import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {postsProps} from "../../../index";


export const MyPosts = (props: postsProps) => {


    let postsElements = props.posts.map(l =>
        <Post postname={l.message} likeCounts={l.likesCount}/>
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

