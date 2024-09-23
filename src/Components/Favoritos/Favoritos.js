import React, { Component } from 'react';
import Card from "../Card/Card";
import "./Favoritos.css";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }
    
    componentDidMount() {

        
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            Promise.all (
            parsedStorage.map ((id) =>
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    peliculas: [...this.state.peliculas, results]
                },
                );
            }
        )))
    }
}
    
render() {
    console.log(this.state.peliculas)
    return (
        <div>
            <h1>Favoritos</h1>
            <div className="card-grid">
                {this.state.peliculas.map((pelicula) => (
                    <Card pelicula={pelicula} />
                ))}
            </div>
        </div>
    );
}
}

export default Favoritos;