import React, {Component} from 'react';
import './card.css';

//`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b` 

class Card extends Component{
    constructor(props){
        super(props)

        this.state = {
            pelicula: null, 
            esFavorito: false
        } 
    };
    
    componentDidMount() { 
    const storage = localStorage.getItem("favoritos") 
    if (storage !== null) {
    const parsedStorage = JSON.parse(storage); 
    const estaEnFavoritos = parsedStorage.includes (this.props.pelicula.id)
    
    if(estaEnFavoritos){
    this.setState({
    esFavorito:true
    })
    }};
}
    
    agregarAFavoritos(){
    
    const storage = localStorage.getItem("favoritos") 
    if (storage !== null) {
    const parsedStorage = JSON.parse(storage); 
    parsedStorage.push(this.props.pelicula.id)
    const stringStorage = JSON.stringify(parsedStorage) 
    localStorage.setItem("favoritos", stringStorage)    
    } 
    else{
    const primerFavorito = [this.props.pelicula.id] 
    const stringStorage = JSON.stringify(primerFavorito) 
    localStorage.setItem("favoritos", stringStorage )
    } 

    this.setState({
    esFavorito: true})
    }
    
    quitarDeFavoritos(){
    const storage = localStorage.getItem("favoritos") 
    const parsedStorage = JSON.parse(storage); 
    const restoFavoritos = parsedStorage.filter((id) => id !== this.props.pelicula.id)
    const stringStorage = JSON.stringify(restoFavoritos) 
    localStorage.setItem("favoritos", stringStorage)
    this.setState({
        esFavorito: false,
    });
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
    
        console.log(this.state.pelicula)

        

    }
        render(){
            if(this.state.pelicula){
                console.log(this.state.pelicula)

            return(
            <div className='movie-card'>
                <img src=''></img>
                <h3 >{this.state.pelicula.original_title}</h3>
                <p className='descripcion'>{this.state.pelicula.overview} </p>
                <a href=''>Ir a detalles</a>
                <button onClick={() => !this.state.esFavorito} > {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"} Agregar a favoritos</button>
            </div>
            )
        }}
    


}

export default Card;