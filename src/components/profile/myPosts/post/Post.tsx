import React from 'react';
import classes from './Post.module.css'

type postPropsType ={
    postname: string
    likeCounts: number
}

export const Post = (props: postPropsType) => {
    return (
            <div>
                    <div className={classes.item}>
                        <img src="https://avatars.mds.yandex.net/i?id=8b78f62b6881a9a7d405d3901af114ba_l-5288018-images-thumbs&n=13" alt=""/>
                        {props.postname}
                        <div>
                            <span>like: {props.likeCounts}</span>
                        </div>

                    </div>
            </div>
    );
};

