import React from'react'
import Itineraries from '../components/Itineraries'
import Filtro from '../components/filtro'



class Cities extends React.Component{
 render(){
    return (
    <div>
        
            <div className="city" >  
            <Itineraries/>
            <Filtro/>

            </div>
      
    </div>

        )
    }
         
}

export default Cities

