import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";

type HeaderContainertype = {
    isAuth: boolean
    login: string
    logout: ()=> void
}

class HeaderContainer extends React.Component<HeaderContainertype, HeaderContainertype> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: StoreType): mapStateToPropsType  => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {logout}) (HeaderContainer)

