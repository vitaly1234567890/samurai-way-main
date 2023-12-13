import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authType, setAuthUserData} from "../../redux/auth-reducer";

type HeaderContainertype = {
    isAuth: boolean
    login: string
    setAuthUserData: (data: authType)=> void
}

class HeaderContainer extends React.Component<HeaderContainertype, HeaderContainertype> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}
        )
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: any): mapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)

