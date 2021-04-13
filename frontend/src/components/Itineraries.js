import React from 'react'


const citys = [
    [ 
      {id: "rome" , name:"Rome", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD" },
      {id:"cancun",name:"Cancun", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD"},
      {id:"ibiza",name:"Ibiza" ,path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD" },
      {id:"ny",name:"New York", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},     
    ],
    [ 
      {id:"la",name:"LA", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"tokio",name:"Tokio", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"paris",name:"Paris" ,path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"amstemdam",name:"Amsterdam", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "}, 
      
    ],
    [ 
      {id:"barcelona",name:"Barcelona", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"milan",name:"Milan", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"bsas",name:"Buenos Aires" ,path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      {id:"berlin",name:"Berlin", path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbva.com%2Fes%2Fviajar-gratis-el-sueno-de-muchos-no-tiene-por-que-ser-dificil-de-conseguir%2F&psig=AOvVaw04AV_xSVQfXZnykO2Ftuue&ust=1618430648617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJ35CC_O8CFQAAAAAdAAAAABAD "},
      
    ],
  ];

  const Itineraries= citys.map((city) => {
    return(
            <div key={city.id} className="card"  style ={{backgroundImage:`url(${city.path})`,width:"37vw",height:"42vh",margin:"1vh",backgroundSize:"cover"}}>
                <h2>{city.name}</h2>
            </div>
        )
    });

  export default Itineraries;

  