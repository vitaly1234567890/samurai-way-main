import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/State";
import { BrowserRouter } from 'react-router-dom';



export const rerenderEntireTree = () => {
    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
        <App state={store.getState()}
             message={store._state.profilePage.newPostText}
             messageText={store._state.messagePage.newMessageBody}
             dispatch={store.dispatch.bind(store)}
        />
        </BrowserRouter>,

        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)