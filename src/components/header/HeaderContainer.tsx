import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunk} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";

type HeaderContainertype = {
    isAuth: boolean
    login: string
    getAuthUserDataThunk: ()=> void
}

class HeaderContainer extends React.Component<HeaderContainertype, HeaderContainertype> {
    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: StoreType): mapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {getAuthUserDataThunk}) (HeaderContainer)

