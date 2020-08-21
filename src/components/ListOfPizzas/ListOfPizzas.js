import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



// Loop over pizzas with .map notation
// only need one div 

class ListOfPizzas extends Component {

    componentDidMount() {
        console.log('woo')
        this.getPizza()
    }

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
            <>
            // setup loop here 
            {this.props.reduxState.pizzaListReducer.map((pizza, i) => {
                return(
                    <div>
                        

                    </div>
                )
            })}
            
            </>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStoreToProps)(ListOfPizzas);