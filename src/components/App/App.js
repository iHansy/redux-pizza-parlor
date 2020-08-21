import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Checkout from '../Checkout/Checkout.jsx';
import CustomerInfo from '../CustomerInfo/CustomerInfo.js'
import AdminView from '../AdminView/AdminView'




class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <h1 className="App-title">Mangiare La Pizza</h1>
            <h2>Cart Total:${this.props.reduxState.cartReducer.reduce((prev, cur) => {
              return prev + cur.price;
            }, 0)}</h2>
          </header>


          <br />

          <Route path="/checkout" component={Checkout} />
          <Route path="/customer_info" component={CustomerInfo} />
          <Route path="/admin" component={AdminView} />

        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
