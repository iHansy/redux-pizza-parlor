import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//importing redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const cartReducer = (state = [{name: 'Big pizza', cost: 12.99}, {name: 'Small pizzeria', cost: 9.77}, {name: 'Pineapple pizza', cost: 14.99}], action) => {
    return state
}

const customerReducer = (state = {customer_name: 'Hans Accola', 
street_address: '4773 Test Address Ave', 
city: 'Minneapolis', 
zip: 88743,
type: 'Delivery'}, action) => {

    return state
}

const pizzaListReducer =(state = [], action) => {
    return state
}

const store = createStore(
    combineReducers({
        pizzaListReducer,
        customerReducer,
        cartReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
