const initialState ={
    itinerarios: [],
    actividades: [],
}

const itineraryReducer = (state = initialState , action) => {
    switch (action.type){
        case 'CARGAR_ITINERARIO':
            return {
                ...state,
                itinerarios: action.payload
            }
        case 'CARGAR_ACTIVIDADES':
            return{
                ...state,
                actividades: action.payload
            }
        
        default: 
            return state 
    }
}
export default itineraryReducer