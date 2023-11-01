import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {State} from "./redux/State";

type AppPropsType = {
    state: State
    addPost: (text: string) => void
    updateNewPostText: (postMessage: string) => void
}


function App(props: AppPropsType) {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <NavBar />
              <div className={'app-wrapper-content'}>
                  <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagePage} />}/>
                  <Route path="/profile" render={ () => <Profile
                      state ={props.state.profilePage}
                      addPost={props.addPost}
                      updateNewPostText={props.updateNewPostText}
                  />}/>
                  {/*<Route path="/news" component={News}/>*/}
                  {/*<Route path="/profile" component={Music}/>*/}
                  {/*<Route path="/profile" component={Settings}/>*/}
              </div>

          </div>
      </BrowserRouter>

      );
}

export default App;
