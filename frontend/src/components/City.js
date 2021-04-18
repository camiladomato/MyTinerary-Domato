import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react';
import backgroundVideo from './video/paisaje2.mp4'
import CallToActionCity from '../components/CallToActionCity'

const City =(props) => {
    const[ciudad,setCiudad] = useState([])// inicio el estado de ciudad en un array vacio(variable y funcion de variable modificadora)
    useEffect(() => {  //me da la posibilidad de manejar el ciclo de vida en componentes funcionales
    const citySelect = props.match.params.id //captura la ciudad a mostrar
    axios.get("http://localhost:4000/api/city/"+ citySelect) //pedido al backend cambiando la barra de navegacion
    .then(respuesta=>setCiudad(respuesta.data.response))//una vez que trae la promesa me da el objeto con el . accedo a la propiedad dat de respuesta  
},[])// renderizate solo una vez , cuando se monta (llama su padre)

return(
   
      <div className="city-image">
            <video autoPlay loop muted id="video2">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
            <div style = {{backgroundImage:`url(${ciudad.path})`,width:"32vw",height:"30vh",margin:"1vh",backgroundSize:"cover"}}>
                <h1 className="title-city">{ciudad.city}</h1>
            </div>
            <div className="under-c">
                UNDER CONSTRUCTION
                </div>
                <p className="info">{ciudad.info}</p>
            <CallToActionCity/>
      </div>
    )
}  

export default City


