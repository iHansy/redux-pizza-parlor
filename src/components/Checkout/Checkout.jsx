import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CustomerToCheckout from '../CustomerToCheckout/CustomerToCheckout';

class Checkout extends Component {

    state = {
        customer_name: this.props.customer.customer_name,
        street_address: this.props.customer.street_address,
        city: this.props.customer.city,
        zip: this.props.customer.zip,
        type: this.props.customer.type,
        total: 0
    }

    checkoutButton = () => {
        // axios.post('/api/order', this.state)
        //     .then((response) => {
        //         //added new customer to database
        //     })
        // console.log(totalCost);
        // this.getTotalCost();
        // console.log(this.state);
        let totalCost = 0
        //looping over all items in cart to get total cost
        for (let i = 0; i < this.props.cart.length; i++) {
            totalCost += this.props.cart[i].cost;
        }
        this.setState({
            total: totalCost
        })
        console.log(totalCost);
        console.log(this.state);
        // if statement in index for no payload or send empty array

    }

    // let totalCost = 0
    //     //looping over all items in cart to get total cost
    //     for (let i = 0; i < this.props.cart.length; i++) {
    //         totalCost += this.props.cart[i].cost;
    //     }

    getTotalCost = () => {
        let totalCost = 0
        //looping over all items in cart to get total cost
        for (let i = 0; i < this.props.cart.length; i++) {
            totalCost += this.props.cart[i].cost;
        }
        this.setState({
            total: totalCost
        })
        console.log(totalCost);
    }



    render() {

        let totalCost = 0
        //looping over all items in cart to get total cost
        for (let i = 0; i < this.props.cart.length; i++) {
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
                            <th>Pizza Type</th>
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
                <button onClick={this.checkoutButton}>Checkout</button>
                {/* button navigation  */}
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
