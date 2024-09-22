import React, {Component} from 'react';
import './card.css';

//`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b` 

class Card extends Component{
    constructor(props){
        super(props)

        this.state = {
            pelicula: null, 

        }
        
        
    }
    componentDidMount(){ 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)

        .then((response ) => response.json())
        .then((data) => {
            this.setState(
                {
                    pelicula: data,

                }
              
            )
        })
    
        console.log(this.pelicula)

        

    }
        render(){
            if(this.state.pelicula){
                console.log(this.state.pelicula)

            return(
            <div>
                <img src=''></img>
                <h3>{this.state.pelicula.original_title}</h3>
                <p className='descripcion'>{this.state.pelicula.overview} </p>
                <a href=''>Ir a detalles</a>
                <p>AGRRGAR A FAVORTITOS</p>
            </div>
            )
        }}
    


}

export default Card;