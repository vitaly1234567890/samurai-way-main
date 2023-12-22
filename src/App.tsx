import React from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/Profile-Container";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
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

export default App;
