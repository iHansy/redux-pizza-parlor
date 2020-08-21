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
    if(action.type === 'SET_PIZZAS'){
        return action.payload;
    }
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
