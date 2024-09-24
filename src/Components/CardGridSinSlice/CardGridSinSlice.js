import React, { Component } from 'react';
import "./CardGridSinSlice.css"
import Card from '../Card/Card';


class CardGridSinSlice extends Component{
    constructor(props){
        super(props)
        this.state={
            arrayPeliculas:[],  
        }
        
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ arrayPeliculas: data.results}))
            .catch(err => console.error(err));
    }

    render(){
    
       return(

        <section className='card-container'>
            <h2>{this.props.title}</h2> 
            {this.state.arrayPeliculas.map((pelicula, idx)=> (
                <Card pelicula={pelicula} key={idx} /> 
            ))}
       
        </section>

        )
    }};

export default CardGridSinSlice; 