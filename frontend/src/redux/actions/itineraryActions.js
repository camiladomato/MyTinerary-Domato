import axios from 'axios';

const itinerariesActions ={
    cargarItinerarios: (id) => {
        return (dispatch, getstate) => {
            axios.get('http://localhost:4000/api/itinerary/'+id)
            .then(response => dispatch({type: 'CARGAR_ITINERARIO', payload: response.data.response}))
            .catch(error => console.log(error))
        } 
    },
    cargarComentario: (id, comment) =>{ 
        return async (dispatch, getstate) => {
           try{
            const respuesta= await axios.post('http://localhost:4000/api/comentario/'+ id , {comment} , {
                headers:{"Authorization":"Bearer " + localStorage.getItem("token")}
            })
            console.log(respuesta) 
           }
           catch(error){
               console.log(error)
            }
        }
    },

    editarComentario: (id) =>{
        return (dispatch, getstate) => {
            axios.put('http://localhost:4000/api/comentario/')
            .then( response =>{return(response.data.response)})
            .catch(error => console.log(error))
        }
    },
    eliminarComentario: (id) =>{
        return (dispatch, getstate) => {
            axios.delete ('http://localhost:4000/api/comentario/')
            .then( response =>{return(response.data.response)})
            .catch(error => console.log(error))
        } 
    },
    cargarActividad: (id) =>{
        return (dispatch, getstate) => {
            axios.post (' http://localhost:4000/api/activity')
            .then(response => dispatch({type:'CARGAR_ACTIVIDADES', payload: response.data.response}))
            .catch(error => console.log(error))
        }
    } 
   
}
export default itinerariesActions 