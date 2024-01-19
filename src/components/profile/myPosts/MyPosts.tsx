import React, {memo} from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./post/Post";
import {ProfilePage} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

type MyPostsProps = {
    posts: ProfilePage
    addPost: (newPostText: string) => void
}

export const MyPosts = memo( (props: MyPostsProps) => {
    console.log("render")
    let postsElements = props.posts.posts.map(l =>
        <Posts key={l.id} posts={l}/>
    )

    const addPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});


type AddNewPostFormType = {

}
const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Post message' name={"newPostText"} component= {Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

