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
    authorizedUserId: number
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUsersProfileThunk: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: number
}

type PropsType = RouteComponentProps<any> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, ProfilePage> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId

        }
        this.props.getUsersProfileThunk(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.data.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunk, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
