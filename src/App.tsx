import React, {Component} from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/Profile-Container";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {StoreType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppType = {
    initializeApp: () => void
    initialized: boolean
}
class App extends Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/profile" component={Music}/>*/}
                    {/*<Route path="/profile" component={Settings}/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreType) => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App)




