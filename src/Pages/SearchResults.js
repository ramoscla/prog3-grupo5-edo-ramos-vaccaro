import { Component } from "react";
import CardGridSinSlice from "../Components/CardGridSinSlice/CardGridSinSlice";

const apiKey = "5d038daa07630bd00fca08f5408cb116";

class SearchResults extends Component {

    constructor(props){
    super(props)
    this.state = {
        peliculas: [],
    }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=${apiKey}`)
        .then((response)=> response.json())
        .then(data=> {
            this.setState({
                peliculas: data.results
            })
        })
        .catch((error)=> console.log(error))

    }

    render(){
        return (
            <>
            <CardGridSinSlice arrayPeliculas={this.state.peliculas}/>
            </>
        )
    }
}

export default SearchResults