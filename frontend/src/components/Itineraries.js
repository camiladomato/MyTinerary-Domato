import React ,{useState, useEffect} from 'react';
import axios from "axios";
import{NavLink} from 'react-router-dom'


  
  const Filtro=() => {
   
    const [ciudades,setCiudades] = useState([]) 
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState([])
    const [buscar,setBuscar]= useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities') 
        .then(response => setCiudades(response.data.response)) 
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
                ? <h1 className="ops">Oops! no results found ...Please try again</h1>
                : ciudadesFiltradas.map((ciudad) =>{
                return(
                       <NavLink to = {`/city/${ciudad._id}`} className="city-select" key={ciudad._id} >
                            <div id="select-image" key={ciudad.path} style = {{backgroundImage:`url(${ciudad.path})`,width:"35vw",height:"36vh",margin:"1vh",backgroundSize:"cover"}}>
                                <h1 key={ciudad.city} className="title-cities">{ciudad.city} </h1>
                            </div>
                       </NavLink>
                        
                    )})}
                    
              </div>
         </>     
                 )
}

export default Filtro 

