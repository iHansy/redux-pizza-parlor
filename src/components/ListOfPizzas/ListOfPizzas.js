import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


// Loop over pizzas with .map notation
// only need one div 

class ListOfPizzas extends Component {

    state = {
        pizzas: {
            name: '',
            price: 0
        }
    }

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
        
        // axios.post('/api/pizza').then((response) => {
        //     this.getPizza();
        this.props.dispatch({ type: 'ADD_PIZZA', payload: this.state.pizzas});

        this.setState({
            pizzas: {
                name: event.target.value,
                price: event.target.value
            }
        })
    }

    handleRemovePizza = (event) => {
        console.log('in handleRemovePizza');

        this.props.dispatch({ type: 'REMOVE_PIZZA' })            
    }

        // }).catch((error) => {
        //     console.log('error in handleAddPizza ', error);

        // }) 
        
        
    

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
                        <button onClick={this.handleAddPizza}>Add Pizza</button>
                        <button onClick={this.handleRemovePizza}>Remove Pizza</button>
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