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

// Create the store
const store = createStore(
    combineReducers({

    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
