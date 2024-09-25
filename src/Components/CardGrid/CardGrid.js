import React, { Component } from 'react';
import "./CardGrid.css"
import Card from '../Card/Card';




class CardGrid extends Component{
    constructor(props){
        super(props)

        this.state={
            arrayPeliculas:[],  
        }

        
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ arrayPeliculas: data.results.slice(0,5) })
            )
            .catch(err => console.error(err));
    }

    render(){
    
        return(
        <section className='card-container-slice'>
       
            {this.state.arrayPeliculas.map((pelicula, idx)=> (
                 <Card pelicula={pelicula} key={idx} /> 
            ))}
       

        </section>
        )
    }};

    export default CardGrid; 