import React from "react";
import Card from "./Card"
import imagen1 from "../assets/imagen_1.jpg"
import imagen2 from "../assets/imagen_2.jpg"
import imagen3 from "../assets/imagen_3.jpg"

const cards=[
    {
        id:1,
        title:"Vikingos",
        image:imagen1,
        url:"https://www.sensacine.com/series/serie-10214/",
        description:"Vikings es una serie de televisión de drama histórico creada y escrita por Michael Hirst para el canal History.Filmada en Irlanda, se estrenó el 3 de marzo de 2013 y tuvo 6 temporadas y un total de 89 episodios.Vikings está inspirada en las sagas del vikingo nórdico Ragnar Lodbrok"
    },
    {
        id:2,
        title:"Juego de Tronos",
        image:imagen2,
        url:"https://es.wikipedia.org/wiki/Game_of_Thrones",
        description:"La primera temporada comienza quince años después de la guerra civil conocida como la «rebelión de Robert», con la cual Robert Baratheon expulsó del Trono de Hierro a los Targaryen y se proclamó Rey de Poniente. Tras la repentina muerte de la Mano del Rey, Jon Arryn"
    },
    {
        id:3,
        title:"La Casa de Papel",
        image:imagen3,
        url:"https://www.antena3.com/series/casa-de-papel/",
        description:"Un misterioso hombre conocido como «el Profesor» ha pasado toda su vida planeando el mayor de los atracos de la historia: entrar en la Fábrica Nacional de Moneda y Timbre e imprimir 2400 millones de euros recluta a un equipo de ocho personas con habilidades especiales"
    }    
]

function Cards(){
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card=>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSrc={card.image} url={card.url} description={card.description}/>
                        </div>
                    ))
                }    
            </div>
        </div>
    )
}

export default Cards