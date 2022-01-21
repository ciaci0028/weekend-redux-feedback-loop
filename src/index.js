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
const feelingInput = (state, action) => {
    switch(action.type) {
        case 'INPUT_FEELING':
            return action.payload
    }
    return state;
};

const understandingInput = (state, action) => {
    switch(action.type) {
        case 'INPUT_UNDERSTANDING':
            return action.payload
    }
    return state;
};

const supportInput = (state, action) => {
    switch(action.type) {
        case 'INPUT_SUPPORT':
            return action.payload
    }
    return state;
};

const commentsInput = (state, action) => {
    switch(action.type) {
        case 'INPUT_COMMENTS':
            return action.payload
    }
    return state;
};

// Create the store
const store = createStore(
    combineReducers({
        feelingInput,
        understandingInput,
        supportInput,
        commentsInput,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
