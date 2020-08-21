import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import CustomerInfo from '../CustomerInfo/CustomerInfo.js'

import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdminView from '../AdminView/AdminView'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Mangiare La Pizza</h1>
          <h2>Cart Total:${this.props.reduxState.cartReducer.reduce((prev, cur) => {
            return prev + cur.price;
          }, 0)}</h2>
        </header>


        <br />
        <img src="images/pizza_photo.png" />
        <Router>
          <Route path="/checkout" />
          <Route path="/customer_info" />
          <Route path="/admin" component={AdminView} />
        </Router>

        <p>Pizza is great.</p>
        <CustomerInfo />
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
