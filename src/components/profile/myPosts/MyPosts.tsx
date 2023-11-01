import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./post/Post";
import {Post} from "../../../redux/State";


type MyPostsProps = {
    posts: Post[]
    addPost: (postMessage: string) => void
    updateNewPostText: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsProps) => {
    let postsElements = props.posts.map(l =>
        <Posts posts={l} />
    )


    const newPostElement  = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    value={newPostElement.current?.value}
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

