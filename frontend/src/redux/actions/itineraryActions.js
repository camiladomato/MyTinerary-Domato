import axios from 'axios';

const itinerariesActions ={
    cargarItinerarios: (id) => {
        return (dispatch, getstate) => {
            axios.get('/api/itinerary/'+id)
            .then(response => dispatch({type: 'CARGAR_ITINERARIO', payload: response.data.response}))
            .catch(error => console.log(error))
        } 
    },
    cargarComentario: (id, comment)  =>{ 
       
        return async (dispatch, getstate) => {
           try{
            const respuesta= await axios.post('/api/comentario/'+ id , {comment} , {
                headers:{"Authorization":"Bearer " + localStorage.getItem("token")}
            })
            
            return (respuesta.data.response.comments)

           }
           catch(error){
               console.log(error)
            }
        }
    },

    editarComentario: (id , comment ) =>{
        return (dispatch, getstate) => {
            axios.put('/api/comentario/'+ id , {comment})
            .then( response =>{return(response.data.response)})
            .catch(error => console.log(error))
        }
    },
    eliminarComentario: (id) =>{
        return (dispatch, getstate) => {
            axios.delete ('/api/comentario/' + id)
            .then( response =>{return(response.data.response)})
            .catch(error => console.log(error))
        } 
    },
    obtenerComentarios:(id) =>{
        return (dispatch, getstate) => {
            axios.get ('/api/comentarios/')
            .then( response =>{return(response.data.response)})
            .catch(error => console.log(error))
        } 
    },
    obtenerActividades: (id) =>{
        console.log(id)
        return (dispatch, getstate) => {
            axios.get (' /api/activity/'+ id)
            .then(response => dispatch({type:'CARGAR_ACTIVIDADES', payload: response.data.response}))
            .catch(error => console.log(error))
        }
    } 
   
}
export default itinerariesActions 