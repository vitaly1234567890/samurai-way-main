import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/redux-store";
import {State} from "./redux/state";
import { Provider } from 'react-redux';

export const rerenderEntireTree = (state: State) => {
    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
                    <App />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
