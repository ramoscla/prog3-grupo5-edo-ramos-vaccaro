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
            .then(data => this.setState({ arrayPeliculas: data.results }), ()=> console.log(this.state.arrayPeliculas)
            )
            .catch(err => console.error(err));
    }

    render(){
    
        return(
        <section className='card-container'>
       
            {this.state.arrayPeliculas.slice(0,5).map((pelicula, idx)=> (
                 <Card pelicula={pelicula} key={idx} /> 
            ))}
       

        </section>
        )
    }};

    export default CardGrid; 