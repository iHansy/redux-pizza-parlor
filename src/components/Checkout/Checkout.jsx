import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Checkout extends Component {

    componentDidMount() {
        this.getCustomers();
      }
    
      getCustomers = () => {
        //request to database
        axios({
          method: 'GET',
          url: '/api/order'
        }).then((response) => {
            console.log(response.data);
            //response.data will be array of customer info
            //sending dispatch to redux with response.data
            this.props.dispatch({ type: 'SET_CUSTOMERS', payload: response.data })
        }).catch((error) => {
            console.log('error getting customer info', error);
        })
      }





    render() {
        return (
            <div>
                <h3>Step 3: Checkout</h3>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Checkout);
