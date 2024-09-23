import React, { Component } from 'react';
import "./CardGrid.css"
import Card from '../Card/Card';




class CardGrid extends Component{
    constructor(props){
        super(props)

        this.state={
            arrayPelicula:[],
           
        }

        
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(err => console.error(err));
    }

    render(){
    
        return(
        <section className='card-container'>
       
            {Card.map((Card, idx)=> (
                 <Card key={idx} Card={Card} /> 
            ))}
       

        </section>
        )
    }};

    export default CardGrid; 