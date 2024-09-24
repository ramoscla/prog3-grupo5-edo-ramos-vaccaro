import React, { Component } from "react";
import CardGridSinSlice from "../Components/CardGridSinSlice/CardGridSinSlice";

const apiKey = "5d038daa07630bd00fca08f5408cb116";
const apiPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=`;

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            actualPage: 1,
        };
    }

    componentDidMount(){
        fetch(`${apiPopulares}${this.state.actualPage}`)
            .then((response) => response.json())
            .then(data =>
                this.setState({
                    peliculas: data.results,
                    actualPage: this.state.actualPage + 1,
                })
            )
            .catch((error) => console.log(error));
    }

    handleLoadMore(){
        fetch(`${apiPopulares}${this.state.actualPage}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    actualPage: this.state.actualPage + 1,
                })
            )
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <div className="Populares">
                <CardGridSinSlice arrayPeliculas={this.state.peliculas} title="Populares" />
                <button onClick={()=> this.handleLoadMore()}>Cargar más</button>
            </div>
        );
    }
}

export default Populares;

