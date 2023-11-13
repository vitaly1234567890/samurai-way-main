import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, State} from "./redux/State";

type AppPropsType = {
    state: State
    message: string
    messageText: string
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/dialogs" render={() => <Dialogs
                        state={props.state.messagePage}
                        messageText={props.messageText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/profile" render={() => <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}
                        message={props.message}
                    />}/>
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/profile" component={Music}/>*/}
                    {/*<Route path="/profile" component={Settings}/>*/}
                </div>
            </div>
    );
}

export default App;
