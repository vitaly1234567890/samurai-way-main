import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    getUsersProfileThunk,
    getUserStatus,
    ProfilePage,
    ProfileUser,updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    profile: ProfileUser
    status: string
}

type MapDispatchPropsType = {
    getUsersProfileThunk: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
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
            userId = '30314'
        }
        this.props.getUsersProfileThunk(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunk, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

