import React, { Component } from 'react';
import './card.css';
import { Link } from 'react-router-dom';


class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false
        }
    };


    componentDidMount() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            const estaEnFavoritos = parsedStorage.includes(this.props.pelicula.id)

            if (estaEnFavoritos) {
                this.setState({
                    esFavorito: true
                })
            }
        };
    }

    agregarAFavoritos(pelicula) {

        
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(pelicula.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        }
        else {
            const primerFavorito = [pelicula.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
        
    }

    quitarDeFavoritos(pelicula) {
        const storage = localStorage.getItem("favoritos")
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter((peli) => peli !== pelicula.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
            esFavorito: false,
        });
    }


    render() {
        const { original_title, overview, poster_path, id } = this.props.pelicula
        const pelicula = this.props.pelicula
        return (
            <div className='movie-card'>

                <h3 >{original_title}</h3>

                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='portada'/>
                <p className='descripcion'>{overview} </p>
                <Link to={`/detalle/${id}`}>Ir a detalles</Link>
                <button onClick={() => !this.state.esFavorito ? this.agregarAFavoritos(pelicula) : this.quitarDeFavoritos(pelicula)} > {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
            </div>
        )
    }
}





export default Card;