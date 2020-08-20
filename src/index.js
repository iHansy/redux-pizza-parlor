import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



//store all pizzas currently in cart
const cartReducer =(state = [], action) => {
    return state
}

const customerReducer =(state, action) => {
    return state
}
const pizzaListReducer =(state, action) => {
    return state
}


ReactDOM.render(<App />, document.getElementById('root'));
