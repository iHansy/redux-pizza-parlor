import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class CustomerInfo extends Component {
    state ={
        newCustomer: {
            type: '',
            name: '',
            address: '',
            city: '',
            zip: ''
        }
    }
    handleChangeFor = ( propertyName, event) => {
        this.setState({
            newCustomer: {
                ...this.state.newCustomer,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick =() => {//new customer 
        console.log('handling clicks all day long');
        //dispatch to index
        this.props.dispatch({ type: 'SET_CUSTOMER', payload: this.state.newCustomer})
        this.props.history.push("/checkout")//busted
                } 

    deliveryClick = (event) => {
        console.log('delivery cuz im lazy');
        this.setState({ newCustomer: {...this.newCustomer,
            type: 'delivery'
        }}) 
    }

    carryOutClick = (event) => {
        console.log('carry out');
        this.setState({ newCustomer: {...this.newCustomer,
            type: 'carryOut'
        }}) 
        //console.log('pickup because im on my way home from target');
        //this.setState({ newCustomer 
         //   {...this.newCustomer,
         //   type: 'carryOut'
      //  }})
    }

    
    
    render(){
        return (
            <section>
                <input required placeholder="Name"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('name', event)}
                />
                <input required placeholder="Street Address"
                value={this.state.newCustomer.address}
                onChange={(event) => this.handleChangeFor('address', event)}
                />
                <input required placeholder="City"
                value={this.state.newCustomer.city}
                onChange={(event) => this.handleChangeFor('city', event)}
                />
                <input required placeholder="Zip"
                value={this.state.newCustomer.zip}
                onChange={(event) => this.handleChangeFor('zip', event)}
                />

                {/*<Link to="/checkout">
                not sure of the right whack place to send it
                    <button type="submit">
                        Next
                    </button>
                </Link>*/}

                

                <button type="submit" onClick={this.handleClick}>Next</button>
                <button onClick={this.deliveryClick}>Delivery</button>
                <button onClick={this.carryOutClick}>Carry Out</button>


            </section>

        )
    }
}











const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
  
  export default connect(mapStateToProps)(CustomerInfo);
