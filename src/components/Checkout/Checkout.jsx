import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CustomerToCheckout from '../CustomerToCheckout/CustomerToCheckout';

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
        // let customerIndex = this.props.currentCustomer.length - 1
        // console.log(customerIndex);
        //console.logs can go here
        // console.log(this.props.reduxStore.customerReducer[1].customer_name);
        // console.log(this.props.currentCustomer[customerIndex])

        // let customer = this.props.storeCustomers.length

        // let customerPass = customer - 1

        console.log(this.props.storeCustomers.length - 1);
        let startingIndex = this.props.storeCustomers.length - 1
        console.log(startingIndex);

        for (let i = 3; i < this.props.storeCustomers.length; i++ ) {
            console.log(i);
            console.log(this.props.storeCustomers[i].customer_name);
            // console.log(this.props.storeCustomers;
            // console.log(this.props.storeCustomers[i].customer_name);

            //double ampersand?


        }

        return (
            <div>
                <h3>Step 3: Checkout</h3>
                {/* <CustomerToCheckout customer={this.props.storeCustomers[this.props.storeCustomers.length - 1]}/> */}
                {/* {this.props.reduxStore.currentCustomer.map((customer, index) => {
                    return (
                        <p>{customer.id}</p>
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        storeCustomers: reduxStore.customerReducer
    }
}

export default connect(mapStateToProps)(Checkout); //connecting with redux to receive and send from
