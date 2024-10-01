import React from "react";

const NotFound = () => {
  return (
    <div className="contenedor-notfound">
      <h1>ERROR 404</h1>
      <img
        src="https://media.giphy.com/media/lnaIzsFXSAss5osoy3/giphy.gif?cid=ecf05e47rh2fq4yxyr9gedzq2gq3vunmo9etj536jrlvh98w&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Error gif"
        className="gifError"
      />
      <h2>PÁGINA NOT FOUND</h2>
      <p>Perdón... pero la página que buscas no existe.</p>
      <a href="/" className="regresar">
        Regresar a Home
      </a>
      
    </div>
  );
};

export default NotFound;
