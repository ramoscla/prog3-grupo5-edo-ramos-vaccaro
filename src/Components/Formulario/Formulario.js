import React, { Component } from 'react';


class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {valor: ''};
    }
  
    evitarSubmit(event) {
      event.preventDefault();
    }
  
    controlarCambios(event) {
      this.setState({valor: event.target.value});
    }
  
    render() {
      return (
      
         
         <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
        
       
      );
    }
  }

  export default Formulario; 