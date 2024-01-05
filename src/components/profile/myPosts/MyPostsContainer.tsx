import {addPostActionCreator, ProfilePage} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: ProfilePage
}

type MapDispatchToPropsType = {
    addPost: (newPostText:string)=> void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return{
        posts: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

