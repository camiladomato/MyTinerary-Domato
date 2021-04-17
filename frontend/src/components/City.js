import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react';

const City =(props) => {
    const[ciudad,setCiudad] =useState([])// inicio el estado de ciudad en un array vacio(variable y funcion de variable modificadora)
    useEffect(() => {  //me da la posibilidad de manejar el ciclo de vida en componentes funcionales
    const citySelect = props.match.params.id //captura la ciudad a mostrar
    axios.get("http://localhost:4000/api/city"+ citySelect) //pedido al backend cambiando la barra de navegacion
    .then(respuesta=>setCiudad(respuesta.data.response))//una vez que trae la promesa me da el objeto con el . accedo a la propiedad dat de respuesta  
},[])// renderizate solo una vez , cuando se monta (llama su padre)


return(
    <h3>{ciudad.City}</h3>
    )
}  

export default City


