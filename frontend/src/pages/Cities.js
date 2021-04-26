import React from'react'
import CitiesFilter from '../components/CitiesFilter'
import HeroCities from '../components/HeroCities'
import {connect} from 'react-redux';
import citiesAction from '../redux/actions/citiesActions';

class Cities extends React.Component{
 componentDidMount(){
    this.props.cargarCiudades();
   }
 
   render(){
    return (
         <>
            <HeroCities/>
            <CitiesFilter/>
         </>
        )
    }     
}
const mapDispatchToProps = {
   cargarCiudades:citiesAction.cargarCities
}  
export default connect (null , mapDispatchToProps) (Cities)

