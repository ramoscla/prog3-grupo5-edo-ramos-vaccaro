import React, { Component } from 'react';
import "./CardGridSinSlice.css"
import Card from '../Card/Card';


class CardGridSinSlice extends Component{
    
    render() {
        const { arrayPeliculas, title } = this.props; 

        return (
            <section className='card-container'>
                <h2>{title}</h2> 
                {arrayPeliculas.map((pelicula, idx) => (
                    <Card pelicula={pelicula} key={idx} /> 
                ))}
            </section>
        );
    }

};

export default CardGridSinSlice; 