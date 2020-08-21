import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CustomerToCheckout from '../CustomerToCheckout/CustomerToCheckout';

class Checkout extends Component {


    // componentDidMount() {
    //     this.getCustomers();
    // }

    // getCustomers = () => {
    //     //request to database
    //     axios({
    //         method: 'GET',
    //         url: '/api/order'
    //     }).then((response) => {
    //         console.log(response.data);
    //         //response.data will be array of customer info
    //         //sending dispatch to redux with response.data
    //         this.props.dispatch({ type: 'SET_CUSTOMERS', payload: response.data })
    //     }).catch((error) => {
    //         console.log('error getting customer info', error);
    //     })
    // }


    render() {
        // let customerIndex = this.props.currentCustomer.length - 1
        // console.log(customerIndex);
        //console.logs can go here
        // console.log(this.props.reduxStore.customerReducer[1].customer_name);
        // console.log(this.props.currentCustomer[customerIndex])

        // let customer = this.props.storeCustomers.length

        // let customerPass = customer - 1

        // console.log(this.props.storeCustomers.length - 1);
        // let startingIndex = this.props.storeCustomers.length - 1
        // console.log(startingIndex);

        // for (let i = 3; i < this.props.storeCustomers.length; i++ ) {
        //     console.log(i);
        //     console.log(this.props.storeCustomers[i].customer_name);
        // console.log(this.props.storeCustomers;
        // console.log(this.props.storeCustomers[i].customer_name);
        //double ampersand?


        let totalCost = 0
        for (let i=0; i<this.props.cart.length; i++) {
            totalCost += this.props.cart[i].cost;

        }



        return (
            <div>
                <h3>Step 3: Checkout</h3>
                <p>{this.props.customer.customer_name}</p>
                <p>{this.props.customer.street_address}</p>
                <p>{this.props.customer.city}</p>
                <p>{this.props.customer.type}</p>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.cost}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h4>Total Cost: ${totalCost}</h4>

            </div>


        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        customer: reduxStore.customerReducer,
        cart: reduxStore.cartReducer
    }
}

export default connect(mapStateToProps)(Checkout); //connecting with redux to receive and send from
