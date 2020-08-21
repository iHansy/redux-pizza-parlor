import React, { Component } from 'react';
import { connect } from 'react-redux';


// Loop over pizzas with .map notation
// only need one div 

class ListOfPizzas extends Component {

    // getting pizza data
    getPizza = () => {
        axios.get('/api/pizza').then((response) => {
            console.log('pizza:', response.data);
            // dispatching an action with pizza data
            this.props.dispatch({ type: 'SET_PIZZAS', payload: response.data });
            
        }).catch((error) => {
            console.log('error in GET pizza', error);
            
        })
    }


    render(){
        return(
            // setup loop here 
            {this.props.reduxState.pizzaListReducer.map((pizza, i) => {
                return(
                    <div>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>

                    </div>
                )
            })}
            

        )
    }
}

const mapStoreToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStoreToProps)(ListOfPizzas);