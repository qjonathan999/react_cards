import React from "react";
import propTypes from "prop-types"
import "./cards.css"

function Card({title,imageSrc,url}){
    return(
        <div className="card text-center bg-dark">
            <img src={imageSrc} alt="Imagen"/>
            <div className="card-body">
                <h4 className="card-title text-light">{title}</h4>
                <p className="card-text text-secondary">
                Vikings es una serie de televisión de drama histórico creada y escrita por Michael Hirst para el canal History. 
                Filmada en Irlanda, se estrenó el 3 de marzo de 2013 y tuvo 6 temporadas y un total de 89 episodios.
                Vikings está inspirada en las sagas del vikingo nórdico Ragnar Lodbrok
                </p>
                <a href={url} className="btn btn-outline-info" target="_blank">+ Info en la pagina oficial</a>
            </div>
        </div>
    )
}

Card.propTypes={
    title:propTypes.string.isRequired,
    url:propTypes.string,
    imageSrc:propTypes.string,
}

export default Card