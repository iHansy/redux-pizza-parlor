import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class CustomerInfo extends Component {
    state ={
        newCustomer: {
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

    clickHandle = () => {
        this.props.history.push("/checkout")
    }

    handleClick =() => {
                console.log('handling clicks all day long');
                //dispatch to index
                this.props.dispatch({ type: 'SET_CUSTOMER', payload: this.state.newCustomer})
                this.props.history.push("/checkout")//busted
                        }
    
    render(){
        return (
            <section>
                <input required placeholder="Name"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('name', event)}
                />
                <input required placeholder="Street Address"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('address', event)}
                />
                <input required placeholder="City"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('city', event)}
                />
                <input required placeholder="Zip"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('zip', event)}
                />

               
                    <button onClick={this.handleClick} type="submit">
                        Next
                    </button>
                


            </section>

        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
  
  export default connect(mapStateToProps)(CustomerInfo);