import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const cartReducer =(state = [], action) => {
    return state
}

const customerReducer =(state, action) => {
    return state
}

const pizzaListReducer =(state, action) => {
    return state
}


const storeInstance = createStore(
    combineReducers({
        cartReducer,
        customerReducer,
        pizzaListReducer
    }),

    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


