import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./post/Post";
import {ProfilePage} from "../../../redux/profile-reducer";

type MyPostsProps = {
    posts: ProfilePage
    addPost: (newPostText:string) => void
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPosts = (props: MyPostsProps) => {
    let postsElements = props.posts.posts.map(l =>
        <Posts key={l.id} posts={l}/>
    )

    const addPost = () => {
        props.addPost(props.posts.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.posts.newPostText}
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

