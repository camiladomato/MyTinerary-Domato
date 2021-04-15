import React from 'react'


const citys = [
  
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

  const Itineraries=()=>{
    return (citys.map((city) => {
        console.log(city.id)
        return(
<div  className="photo" style = {{backgroundImage:`url(${city.path})`,width:"37vw",height:"42vh",margin:"1vh",backgroundSize:"cover"}}>
                <h2 className="photo-name">{city.city}</h2>
              </div>        );
      })
    ) 
  } 
  export default Itineraries;

