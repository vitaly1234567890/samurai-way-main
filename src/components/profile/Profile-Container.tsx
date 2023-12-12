import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {ProfilePage, ProfileUser, setUserProfile} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profile: ProfileUser
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUser) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType, ProfilePage> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }}

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)

