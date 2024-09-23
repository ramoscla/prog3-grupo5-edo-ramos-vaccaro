import React, { Component } from 'react';
import Card from "../Card/Card";
import "./Favoritos.css";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: [],
            pelicula: null,
            esFavorito: false,
        };
    }
    
    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            this.setState({
                favoritos: parsedStorage,
                
            });
        }
    }
    
render() {
    console.log(this.state.favoritos)

    
    return (
        <div>
            <h1>Favoritos</h1>
            <div className="card-grid">
                {this.state.favoritos.map((pelicula) => (
                    <Card pelicula={pelicula} />
                ))}
            </div>
        </div>
    );
}
}

export default Favoritos;