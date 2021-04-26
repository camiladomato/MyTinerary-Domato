const initialState ={
    itinerarios: [],
}

const itineraryReducer = (state = initialState , action) => {
    switch (action.type){
        case 'CARGAR_ITINERARIO':
            return {
                ...state,
                itinerarios: action.payload
            }
        
        default: 
            return state 
    }
}
export default itineraryReducer