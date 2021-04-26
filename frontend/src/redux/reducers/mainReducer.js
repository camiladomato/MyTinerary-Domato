import reducerCity from './reducerCity'
import {combineReducers} from "redux";
import itineraryReducer from  "../reducers/itineraryReducer"

const mainReducer = combineReducers({ 
    city : reducerCity,
    itinerary: itineraryReducer

})
export default mainReducer