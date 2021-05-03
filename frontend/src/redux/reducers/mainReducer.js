import reducerCity from './reducerCity'
import {combineReducers} from "redux";
import itineraryReducer from  "../reducers/itineraryReducer"
import userReducer from "../reducers/userReducer"

const mainReducer = combineReducers({ 
    city : reducerCity,
    itinerary: itineraryReducer,
    user: userReducer
})
export default mainReducer