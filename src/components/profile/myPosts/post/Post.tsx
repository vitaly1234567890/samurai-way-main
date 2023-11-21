import React from 'react';
import classes from './Post.module.css'
import {Post} from "../../../../redux/state";

type postPropsType ={
    posts: Post
}

export const Posts = (props: postPropsType) => {
    return (
            <div>
                    <div className={classes.item}>
                        <img src="https://avatars.mds.yandex.net/i?id=8b78f62b6881a9a7d405d3901af114ba_l-5288018-images-thumbs&n=13" alt=""/>
                        {props.posts.message}
                        <div>
                            <span>like: {props.posts.likesCount}</span>
                        </div>

                    </div>
            </div>
    );
};

