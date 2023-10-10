import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./post/Post";

export const MyPosts = () => {
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
                <Post postname={'Hello!!!'} likeCounts={2}/>
                <Post postname={'How old are you?'} likeCounts={10}/>
                <Post postname={'Where are you from?'} likeCounts={5}/>
            </div>

        </div>
    );
};

