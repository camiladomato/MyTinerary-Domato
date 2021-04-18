import React ,{useState, useEffect} from 'react';
import axios from "axios";
import{NavLink} from 'react-router-dom'


  
  const Filtro=() => {
   
    const [ciudades,setCiudades] = useState([]) // es un hook
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState([])
    const [buscar,setBuscar]= useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities') //recibo una promesa y lo convierte de json
        .then(response => setCiudades(response.data.response)) //lo que recibi de controllers
        //.catch(error)//error
    },[]) 
        
    useEffect(() =>{
        setCiudadesFiltradas(
            ciudades.filter(ciudad =>{ return ciudad.city.toLowerCase().indexOf(buscar.toString().toLowerCase().trim() ) === 0})
            )},[buscar,ciudades])
    return(
        <>
            <div className="buscador">
                <input type="text" id="buscar" placeholder="Search here!" onChange ={e => setBuscar (e.target.value)}/>
            </div>
              <div className="page-cities">
              {ciudadesFiltradas.length === 0
                ? <h1 className="ops">Oops! no result found ...try again</h1>
                : ciudadesFiltradas.map((ciudad) =>{
                return(
                       <NavLink to = {`/city/${ciudad._id}`} className="city-select">
                            <div id="select-image" style = {{backgroundImage:`url(${ciudad.path})`,width:"35vw",height:"36vh",margin:"1vh",backgroundSize:"cover"}}>
                                <h1 className="title-cities">{ciudad.city} </h1>
                            </div>
                       </NavLink>
                        
                    )})}
                    
              </div>
         </>     
                 )
}


export default Filtro 

