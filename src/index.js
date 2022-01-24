import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { useEffect } from 'react';
import logger from "redux-logger";

// Reducers
const feelingInput = (state = null, action) => {
    switch(action.type) {
        case 'INPUT_FEELING':
            return action.payload;
        case 'RESET_VALUES':
            return state = null;
    }
    return state;
};

const understandingInput = (state = null, action) => {
    switch(action.type) {
        case 'INPUT_UNDERSTANDING':
            return action.payload;
        case 'RESET_VALUES':
            return state = null;
    }
    return state;
};

const supportInput = (state = null, action) => {
    switch(action.type) {
        case 'INPUT_SUPPORT':
            return action.payload;
        case 'RESET_VALUES':
            return state = null;
    }
    return state;
};

const commentsInput = (state = null, action) => {
    switch(action.type) {
        case 'INPUT_COMMENTS':
            return action.payload;
        case 'RESET_VALUES':
            return state = null;
    }
    return state;
};

const adminList = (state = [], action) => {
    switch(action.type) {
        case 'SET_ADMIN_LIST':
            return action.payload;
    }
    return state;
}

// Create the store
const store = createStore(
    combineReducers({
        feelingInput,
        understandingInput,
        supportInput,
        commentsInput,
        adminList,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
