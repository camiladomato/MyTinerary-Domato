import axios from 'axios';

const itinerariesActions ={
    cargarItinerarios: (id) => {
        console.log(id)
        return (dispatch, getstate) => {
            axios.get('http://localhost:4000/api/itinerary/'+id)
            .then(response => dispatch({type: 'CARGAR_ITINERARIO', payload: response.data.response}))
            .catch(error => console.log(error))
        } 
    }

}
export default itinerariesActions 