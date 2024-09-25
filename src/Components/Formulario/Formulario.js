import React, { Component } from 'react';


class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {
        query: ""
      };
    }
    
    handleCancelSubmit(e){
      e.preventDefault()
    };

    handleFormChange(e) {
      this.setState({
        query: e.target.value
      })
    }

    handleFormSubmit(){
      this.props.history.push("/search", {query: this.state.query})
    }
  
    render() {
      return (
      
        <div>
        <form onSubmit={(e)=> this.handleCancelSubmit(e)}>
          <input name= "query" type="text" onChange={(e)=>this.handleFormChange(e)} value={this.state.query} />
          <button onClick={()=> this.handleFormSubmit()}>Search</button>
        </form>
        </div>
     
      );
    }
  }

  export default Formulario; 