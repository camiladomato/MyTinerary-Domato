import axios from 'axios';


const activitiesActions ={
    cargarActividad: () => {
        return  (dispatch, getstate) => {
              axios.post('https://mitinerary-domato.herokuapp.com/api/activity/')
                .then( response =>{return(response.data.response)})
                .catch(error => console.log(error))
               }
        },
    obtenerTodasLasActividades:() => {
      return  (dispatch, getstate) => {
            axios.post('https://mitinerary-domato.herokuapp.com/api/activity/')
            .then(response => dispatch ({type: 'CARGAR_ACTIVIDADES', payload:response.data.response}))
            .catch(error => console.log(error))
             }
      }
}
    
export default activitiesActions 
