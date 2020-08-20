import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//importing redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const cartReducer = (state = [], action) => {
    return state
}

const customerReducer = (state = [], action) => {
    if (action.type === 'SET_CUSTOMERS') {
        console.log(action.payload);
        return action.payload //adding customer info from DB to reducer with axios.get
    }
    return state
}

const pizzaListReducer =(state, action) => {
    return state
}

const storeInstance = createStore(
    combineReducers({
        customerReducer,
    }),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
