import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/State";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             message={store._state.profilePage.newPostText}
             addMessage={store.addMessage.bind(store)}
             messageText={store._state.messagePage.newMessage}
             updateMessage={store.updateMessage.bind(store)}
        />,

        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)