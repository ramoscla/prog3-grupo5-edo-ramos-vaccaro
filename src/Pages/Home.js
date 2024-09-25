import React, { Component } from "react";
import Formulario from "../Components/Formulario/Formulario";

import CardGrid from "../Components/CardGrid/CardGrid";

const apiKey = "5d038daa07630bd00fca08f5408cb116"
const apiPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; 
const apiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`; 


//fetch('https://api.themoviedb.org/3/movie/top_rated')
//	.then( response => response.json())
//	.then( data => this.setState(
//  {datosPopular: data
// }
//   ))
//  console.log(datosPopular)
//	.catch( error => console.log(error))


class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            pelisPopu: []
        }
    }


   // componentDidMount(){
  //      fetch(https://api.themoviedb.org/3/movie/popular?api_key={$apiKey')
//	.then( response => response.json() )
//	.then( data => this.setState(
  //  {pelisPopu: data.results,

    //},
   // ()=>console.log(pelisPopu)
   // ))
    
//	.catch( error => console.log(error) )

  //  }

    render(){
    
    return(
       <div className="home">
        <Formulario/> 
        <div className="cardgrid-container">
        <h3>Más Populares</h3>
        <CardGrid url={apiPopulares}/>
        </div>

        <div>
        <h3 className="cardgrid-container">Mejor Puntuadas</h3>
        <CardGrid url={apiTopRated}/> </div>
        
       </div>
    )
}
}

export default Home;