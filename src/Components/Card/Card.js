import React, {Component} from 'react';
import './card.css';

//`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b` 

class Card extends Component{
    constructor(props){
        super(props)
        console.log(this.props.id)
        
    }
    componentDidMount(){ 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)

        .then((response ) => response.json())
        .then((data) => {
            this.setState(
                {
                    pelicula: data.results,

                }
              
            )
        })
    
        console.log(this.pelicula)

        

    }
        render(){
            return(
            <div>
                <img src=''></img>
                <h3>{}</h3>
                <p>{} </p>
                <p>{}</p>
            </div>
            )
        }
    


}

export default Card;