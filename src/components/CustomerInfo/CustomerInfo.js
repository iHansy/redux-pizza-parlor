import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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
                onChange={(event) => this.handleChangeFor('City', event)}
                />
                <input required placeholder="Zip"
                value={this.state.newCustomer.name}
                onChange={(event) => this.handleChangeFor('Zip', event)}
                />

                {/* <Link to="/checkout"> */}
                {/*not sure of the right whack place to send it*/}
                    <button type="submit">
                        Next
                    </button>
                {/* </Link> */}


            </section>

        )
    }
}











const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
  
  export default connect(mapStateToProps)(CustomerInfo);