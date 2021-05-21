import axios from 'axios';

const citiesActions ={
    cargarCities: () => {
        return (dispatch, getstate) => {
            axios.get('http://mitinerary-domato.herokuapp.com/api/cities/')
            .then(response => dispatch ({type: 'CARGAR_CITIES', payload:response.data.response}))
            .catch(error => console.log(error))
        } 
    },

    filterCities:(value) => {
        return  (dispatch, getState) =>{ dispatch({type: 'FILTER_CITIES' , payload:value})
        }
    },


}
export default citiesActions 

