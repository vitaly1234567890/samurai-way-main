import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUsersProfileThunk, ProfilePage, ProfileUser} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    profile: ProfileUser
}

type MapDispatchPropsType = {
    getUsersProfileThunk: (userId: string) => void
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
        this.props.getUsersProfileThunk(userId)
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
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunk}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

