import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {ProfilePage, ProfileUser, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";

type MapStatePropsType = {
    profile: ProfileUser
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUser) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, ProfilePage> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

