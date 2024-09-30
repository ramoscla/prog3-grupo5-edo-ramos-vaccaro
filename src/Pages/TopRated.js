import React, { Component } from "react";
import CardGridSinSlice from "../Components/CardGridSinSlice/CardGridSinSlice";
import Loader from "../Components/Loader/Loader";

const apiKey = "5d038daa07630bd00fca08f5408cb116"
const apiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=`; 


class TopRated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filteredPeliculas: [],
            filterValue: "",
            actualPage: 1,
            isLoading: true
        };
    }

    componentDidMount(){
        fetch(`${apiTopRated}${this.state.actualPage}`)
            .then((response) => response.json())
            .then(data =>
                this.setState({
                    peliculas: data.results,
                    filteredPeliculas: data.results,
                    actualPage: this.state.actualPage + 1,
                    isLoading: false
                })
            )
            .catch((error) => console.log(error));
        }

    handleFilter(e){
        const userValue = e.target.value
        this.setState({
        filterValue: userValue,
        filteredPeliculas: this.state.peliculas.filter((pelicula)=> 
        pelicula.title.toLowerCase().includes(userValue.toLowerCase()))
        }, ()=> console.log(this.state.filterValue))
    }
            
    handleResetFilter(){
        this.setState({
            filterValue: "",
            filteredPeliculas: this.state.peliculas,
            })
    }
        
    handleLoadMore(){
        this.setState({isLoading: true})
        fetch(`${apiTopRated}${this.state.actualPage}`)
        .then((response) => response.json())
        .then((data) =>
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                filteredPeliculas: this.state.peliculas.concat(data.results),
                actualPage: this.state.actualPage + 1,
                isLoading: false
            }))
        .catch((error) => console.log(error));
        };

    render() {
        return (
            <div className="TopRated">
            {!this.state.isLoading ? (
            <>
            <div className="contenedor_form"> 
            <form className="form">
            <input type='text' value={this.state.filterValue} onChange={(e)=> this.handleFilter(e)}/>
            <button onClick={()=> this.handleResetFilter()} className="form_boton">Reset filter</button>
            </form>
            </div>
            <CardGridSinSlice arrayPeliculas={this.state.filteredPeliculas} title="Mejor Puntuados" />
            <button onClick={()=> this.handleLoadMore()}>Cargar más</button>

            </> ) : (
            <Loader/>)}
            </div>
        );
    }
}

export default TopRated;
