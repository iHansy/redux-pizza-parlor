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

    handleAddPizza = (event) => {
        console.log('in handleAddPizza! ');
        
        axios.post('/api/pizza') // FINISH THIS!!!!!
        
        
    }

    render(){
        return(
            // setup loop here 
            <>
            {this.props.reduxState.pizzaListReducer.map((pizza, i) => {
                return(
                    <div>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.image_path}/>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        <button >Add</button>
                        <button>Remove</button>
                    </div>
                );
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