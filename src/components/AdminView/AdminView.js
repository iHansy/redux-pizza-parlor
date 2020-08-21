import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminView extends Component {
    render(){ 
        console.log('woo')
        return(
<h1>aleirhbfaeilbvihebvwlbhe</h1>     
   )
    }
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  
export default connect(mapStateToProps)(AdminView);