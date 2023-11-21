import React from 'react';
import {addPostActionCreator, changeNewTextActionCreator, ProfilePage} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {store} from "../../../redux/state";
import {StoreType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: ProfilePage
}

type MapDispatchToPropsType = {
    addPost: ()=> void
    onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return{
        posts: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator(store._state.profilePage.newPostText))
        },
        onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch(changeNewTextActionCreator(e.currentTarget.value))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

