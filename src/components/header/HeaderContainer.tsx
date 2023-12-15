import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {dataType, setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";
import {StoreType} from "../../redux/redux-store";

type HeaderContainertype = {
    isAuth: boolean
    login: string
    setAuthUserData: (data: dataType)=> void
}

class HeaderContainer extends React.Component<HeaderContainertype, HeaderContainertype> {
    componentDidMount() {
       usersAPI.getUsersHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
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

const mapStateToProps = (state: StoreType): mapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)

