import React from "react";
import DetalleCard from "../DetalleCard/DetalleCard"
const Detalle = (props) => {    
    return (
        <DetalleCard id={props.match.params.id}/>
    )
}

export default Detalle