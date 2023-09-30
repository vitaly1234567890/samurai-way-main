import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    New post
                </div>
               <Post postname={'Hello!!!'} likeCounts={2}/>
               <Post postname={'How old are you?'} likeCounts={10}/>
               <Post postname={'Where are you from?' } likeCounts={5}/>
            </div>
    );
};

