import React, { Component } from "react";
import CardGridSinSlice from "../Components/CardGridSinSlice/CardGridSinSlice";


const apiKey = "5d038daa07630bd00fca08f5408cb116"
const apiPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

class Populares extends Component {

    render(){

        return(
           <div className="Populares">
            <CardGridSinSlice url={apiPopulares} title="Populares" /> 
           </div>
        )
        
    }}
    
    export default Populares
