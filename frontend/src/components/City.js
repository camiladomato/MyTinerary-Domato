import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react';
import backgroundVideo from './video/paisaje2.mp4'
import CallToActionCity from '../components/CallToActionCity'

const City =(props) => {
    const[ciudad,setCiudad] = useState([])
    const citySelect = props.match.params.id  
    
    useEffect(() => {  
  
        axios.get("http://localhost:4000/api/city/"+ citySelect) 
        .then(respuesta=>setCiudad(respuesta.data.response)) 
    },[citySelect])

return(
   
      <div className="city-image">
            <video autoPlay loop muted id="video2">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
            <div id="city-info" style = {{backgroundImage:`url(${ciudad.path})`,width:"32vw",height:"30vh",margin:"1vh",backgroundSize:"cover"}}>
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

