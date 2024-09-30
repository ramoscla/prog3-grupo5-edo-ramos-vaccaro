import React from "react";
import { Component } from "react";
import "./DetalleCard.css";
import Loader from "../Loader/Loader";


class DetalleCard extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isLoading: true
        }

    }
    componentDidMount() {
        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                pelicula: results,
                isLoading: false,
            },
            );

        })
        
        .catch((e) => console.log(e)); 
        const storage = localStorage.getItem("favoritos")
        console.log(storage)
            if (storage !== null) {
                const parsedStorage = JSON.parse(storage);
                const estaEnFavoritos = parsedStorage.includes(parseInt(this.props.id))
                console.log(estaEnFavoritos)


    
                if (estaEnFavoritos) {
                    this.setState({
                        esFavorito: true
                    })
                }
            };
    }
    agregarAFavoritos() {

        
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(parseInt(this.props.id))
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        }
        else {
            const primerFavorito = [parseInt(this.props.id)]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
        
    }

    quitarDeFavoritos() {
        const storage = localStorage.getItem("favoritos")
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter((peli) => peli !== parseInt(this.props.id))
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
            esFavorito: false,
        });
    }
    render() {

        if (this.state.isLoading) {
            return <Loader />; 
        }
  
        return (
            <>
            <div className="Detalle">
            <img className="Detalle-img" src= {`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${this.state.pelicula.backdrop_path}`} alt="title-poster"></img>
                <div className="title-info">
                    <h1>{this.state.pelicula.original_title}</h1>
                    <p>{this.state.pelicula.overview}</p>
                    <p>{this.state.pelicula.release_date}</p>
                    <p>{this.state.pelicula.runtime}</p>
                    <p>Rating: {Math.round(this.state.pelicula.vote_average)}/10</p>
                    <div className="rating">
                    </div>
                    <p className="detalle-genero">{this.state.pelicula.genres[0].name}</p>
                    <button onClick={() => !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarDeFavoritos()} > {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
                    </div>
            </div>

                
            </>
        );
    }
    }


export default DetalleCard