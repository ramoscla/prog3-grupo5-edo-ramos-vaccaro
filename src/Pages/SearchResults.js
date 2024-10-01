import { Component } from "react";
import CardGridSinSlice from "../Components/CardGridSinSlice/CardGridSinSlice";
import Loader from "../Components/Loader/Loader";

const apiKey = "5d038daa07630bd00fca08f5408cb116";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div>
            <CardGridSinSlice arrayPeliculas={this.state.peliculas} />
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default SearchResults;
