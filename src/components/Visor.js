import React from 'react'
import '../stylesheets/Visor.css';

class Visor extends React.Component {
    render() {
      return (
        <h1>count = {this.props.count}</h1>
      );
    }
  }
  
  export default Visor;