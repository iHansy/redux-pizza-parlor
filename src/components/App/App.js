import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Checkout from '../Checkout/Checkout.jsx';

class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
