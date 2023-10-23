import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postsProps = {
    posts: post[]
}

type post = {
    id: number
    message: string
    likesCount: number
}

let posts = [
    {id: 1, message: 'Hello!!!', likesCount: 2},
    {id: 2, message: 'How old are you?', likesCount: 10},
    {id: 3, message: 'Where are you from?', likesCount: 5},

]


export type dialogsDataPropsType = {
    dialogsData: dialogsType[]
    messageData: messageType[]
}

type dialogsType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Hello!'},
    {id: 4, message: 'yo'},
]


ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);