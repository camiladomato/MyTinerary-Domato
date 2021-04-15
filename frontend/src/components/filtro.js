import React, { useState, useEffect} from 'react';

const cities = [
  
    {id:1, city:"Rome", path:'../assets/rom.jpg' },
    {id:2,city:"Cancun", path:"../assets/cancun.jpg"},
    {id:3,city:"Ibiza" ,path:"../assets/ibiza.jpg" },
    {id:4,city:"New York", path:"../assets/ny.jpg"},   
    {id:5,city:"LA", path:"../assets/eeuu.jpg"},
    {id:6,city:"Tokio", path:"../assets/tokio.jpg"},
    {id:7,city:"Paris" ,path:"../assets/paris.jpg"},
    {id:8,city:"Amsterdam", path:"../assets/amsterdam.jpg"}, 
    {id:9,city:"Barcelona", path:"../assets/barcelona.jpg"},
    {id:10,city:"Milan", path:"../assets/milan.jpg"},
    {id:11,city:"Buenos Aires" ,path:"../assets/buenosaires.jpg"},
    {id:12,city:"Berlin", path:"../assets/berlin.jpg"}, 
        
  ];

const Filtro=() => {
    const [ciudades,setCiudades] = useState(cities)
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState([])
    const [buscar,setBuscar]= useState([])

    useEffect(() =>{
        setCiudadesFiltradas(
            ciudades.filter(ciudad =>{ return ciudad.city.toLowerCase().indexOf(buscar.toString().toLowerCase().trim() ) === 0})
            )},[buscar])
    return(
        <>
            <input type="text" id="buscar" placeholder="Search here!" onChange ={e => setBuscar (e.target.value)}/>
                
                {ciudadesFiltradas.length === 0
                ? <h1>No hay</h1>
                : ciudadesFiltradas.map((ciudad) =>{
                    return(
                        
                        <h1>{ciudad.city}</h1>
                    )})}
                    </>
                 )
                }



export default Filtro 