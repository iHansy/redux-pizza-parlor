import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AdminView extends Component {

    componentDidMount() {
        console.log('wow')
        this.getOrders()
    }

    getOrders = () => {
        axios.get('/api/order').then((response) => {
            console.log('order:', response.data);
            // dispatching an action with pizza data
            this.props.dispatch({ type: 'SET_ORDER', payload: response.data });
            
        }).catch((error) => {
            console.log('error in GET order', error);
            
        })
    }


    render(){ 
        return(
                <>
                {this.props.reduxState.orderReducer.map((order, i) => {
                    return(
                    <li>name: {order.name}, time ordered: {order.time}, type: {order.type}, total: {order.total}</li>
                    )
                })
                }
                </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  
export default connect(mapStateToProps)(AdminView);