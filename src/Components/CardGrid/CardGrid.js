import React, { Component } from "react";
import "./cardGrid.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayPeliculas: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          arrayPeliculas: data.results.slice(0, 5),
          isLoading: false,
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <section className="card-container-slice">
        {!this.state.isLoading ? (
          this.state.arrayPeliculas.map((pelicula, idx) => (
            <Card pelicula={pelicula} key={idx} />
          ))
        ) : (
          <Loader />
        )}
      </section>
    );
  }
}

export default CardGrid;
