import React, {Component, Suspense} from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {StoreType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {News} from "./components/news/news";
import {Music} from "./components/Music/music";


const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/Profile-Container'));

type AppType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends Component<AppType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
        alert(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/profile" />} />
                        <Route path="/profile/:userId?"
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </Suspense>
                               }}/>
                        <Route path="/dialogs" render={() => {
                            return <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </Suspense>
                        }}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        {/*<Route path="/settings" component={Settings}/>*/}
                        <Route path="*" render={() => <div>Error 404</div>}/>
                    </Switch>
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
    connect(mapStateToProps, {initializeApp}))(App)




