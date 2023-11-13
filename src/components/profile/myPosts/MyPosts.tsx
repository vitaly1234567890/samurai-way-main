import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./post/Post";
import {ActionsTypes, Post} from "../../../redux/State";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsProps = {
    posts: Post[]
    message: string
    dispatch: (action: ActionsTypes) => void
}




export const MyPosts = (props: MyPostsProps) => {
    let postsElements = props.posts.map(l =>
        <Posts posts={l}/>
    )

    const addPost = () => {
        props.dispatch(addPostActionCreator (props.message))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.message}
                    onChange={onPostChange}
                ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};

