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
        url:"https://www.sensacine.com/series/serie-10214/"
    },
    {
        id:2,
        title:"Juego de Tronos",
        image:imagen2,
        url:"https://es.wikipedia.org/wiki/Game_of_Thrones"
    },
    {
        id:3,
        title:"La Casa de Papel",
        image:imagen3,
        url:"https://www.antena3.com/series/casa-de-papel/"
    }
]

function Cards(){
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card=>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSrc={card.image} url={card.url}/>
                        </div>
                    ))
                }    
            </div>
        </div>
    )
}

export default Cards