import React from "react";
import DetalleCard from "../Components/DetalleCard/DetalleCard";

const Detalle = (props) => {
  return( 
    <DetalleCard id={props.match.params.id}/>
    );
};

export default Detalle;
