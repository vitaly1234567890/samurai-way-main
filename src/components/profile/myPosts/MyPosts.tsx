import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./post/Post";
import {Post} from "../../../redux/State";


type MyPostsProps = {
    posts: Post[]
    addPost: (postMessage: string) => void
    updateNewPostText: (postMessage: string) => void
    message: string
}

export const MyPosts = (props: MyPostsProps) => {
    let postsElements = props.posts.map(l =>
        <Posts posts={l} />
    )

    const addPost = () => {
            props.addPost(props.message)

    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.message}
                    onChange={ onPostChange }
                ></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>
    );
};

