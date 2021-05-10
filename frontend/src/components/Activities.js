import React from 'react'
import {connect} from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';
import {useEffect,useState} from 'react'


const Activities = (props) =>{

  const [itinerarySelect, setItinerarySelect] = useState(null)
   
   //useEffect(()=>{setItinerarySelect(listaActividades.find(actividad => actividad === actividad.obtenerActividades())
     // )}
     //, []) 

      return( 
   <div className="foto-actividades">
      {props.listaActividades.map(actividad=>{

         return(
            <div>
               <p className="titulo-actividad">{actividad.title}</p>
               <p>{actividad.description}</p>
               <p>{"hola aca van las fotos"}</p>
               
            </div>
         )
        
         
         })
      }
      
   </div>
  )
  
}

const mapStateToProps = state =>{
   
   return{
      listaActividades: state.itinerary.actividades    
   }

}
const mapDispatchToProps = {
   obtenerActividades: itineraryActions.obtenerActividades
}  
export default connect (mapStateToProps, mapDispatchToProps)(Activities)