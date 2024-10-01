import React, { Component } from "react";
import "./cardGridSinSlice.css";
import Card from "../Card/Card";

class CardGridSinSlice extends Component {
  render() {

    const { arrayPeliculas, title } = this.props;

    return (
      <section className="card-container">
        <h2>{title}</h2>
        <div className="cards">
          {arrayPeliculas.map((pelicula, idx) => (
            <Card pelicula={pelicula} key={idx} />
          ))}
        </div>
      </section>
    );
    
  }
}

export default CardGridSinSlice;
