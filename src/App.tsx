import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <NavBar />
              <div className={'app-wrapper-content'}>
                  <Route path="/dialogs" component={Dialogs}/>
                  <Route path="/profile" component={Profile}/>
                  {/*<Route path="/news" component={News}/>*/}
                  {/*<Route path="/profile" component={Music}/>*/}
                  {/*<Route path="/profile" component={Settings}/>*/}
              </div>

          </div>
      </BrowserRouter>

      );
}

export default App;
