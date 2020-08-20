import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

//redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'

const pizzaListReducer =(state = [], action) => {
    return state
}

const customerReducer =(state = [], action) => {
    return state
}

const cartReducer =(state = [{price: 7.50}, {price: 6.3}], action) => {
    return state
}






const store = createStore(
    combineReducers({
        pizzaListReducer,
        customerReducer,
        cartReducer

    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
