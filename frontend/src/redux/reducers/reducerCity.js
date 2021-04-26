

const initialState ={
    cities:[],
    filterCities:[]
}

const reducerCity = (state = initialState , action) => {
    switch (action.type){
        case 'CARGAR_CITIES':
            return {
                ...state,
                cities: action.payload,
                filterCities: action.payload,
            }
        
        case 'FILTER_CITIES':
            return {
                ...state,
                filterCities: state.cities.filter(ciudad => {return ciudad.city.toLowerCase().indexOf(action.payload.toString().toLowerCase().trim()) === 0})
            }
        default: 
            return state 
    }
}
export default reducerCity
