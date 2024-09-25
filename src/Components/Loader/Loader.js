import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className='Loader'>
              <img
                src="https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif?cid=ecf05e47cubozxd160sezuzqrmdag4vdm3qhu9vsbo2g874p&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Loading gif"
                className="gifLoader"
            />
            <p>Cargando...</p>
        </div>
    );
}

export default Loader; 