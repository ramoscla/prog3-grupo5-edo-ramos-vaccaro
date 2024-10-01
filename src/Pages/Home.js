import React, { Component } from "react";
import Formulario from "../Components/Formulario/Formulario";
import CardGrid from "../Components/CardGrid/CardGrid";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const apiKey = "5d038daa07630bd00fca08f5408cb116";
const apiPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const apiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelisPopu: [],
    };
  }

  render() {
    return (
      <div className="home .center-page ">
        <Formulario history={this.props.history} />
        
        <div className="cardgrid-container">
          <h3 className="titulos">MÁS POPULARES</h3>
          <Link to={"/populares"} className="verTodas"> Ver Todas </Link>
          <CardGrid url={apiPopulares} />
        </div>

        <div className="cardgrid-container">
          <h3 className="titulos">MEJOR PUNTUADAS</h3>
          <Link to={"/top"} className="verTodas"> Ver Todas </Link>
          <CardGrid url={apiTopRated} />
        </div>
      </div>
    );
  }
}

export default Home;
