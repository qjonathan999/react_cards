import React from "react";
import propTypes from "prop-types"
import "./cards.css"

function Card({title,imageSrc,url,description}){
    return(
        <div className="card text-center bg-dark">
            <img src={imageSrc} alt="Imagen"/>
            <div className="card-body">
                <h4 className="card-title text-light">{title}</h4>
                <p className="card-text text-secondary">
                {description}
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