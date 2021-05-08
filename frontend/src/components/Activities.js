import React from 'react'
import {connect} from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';
import {useEffect,useState} from 'react'


const Activities = (props) =>{
  
   //const [itinerarySelect, setItinerarySelect] = useState(null)
   
   //useEffect(()=>{setItinerarySelect(props.listaActividades.find(actividad => actividad === props.match.params))
     // props.cargarActividad(props)
    //  } , []) 

      return( 
   <div>
      {props.listaActividades.map((actividad)=>{
         <h2>{actividad}</h2>
         })
      }
      
   </div>
  )
  
}

const mapStateToProps = state =>{
   console.log(state)
   return{
       listaActividades: state.itinerary.actividades,    
   }

}
const mapDispatchToProps = {
   cargarActividad: itineraryActions.cargarActividad,
}  
export default connect (mapStateToProps, mapDispatchToProps)(Activities)