import React  from 'react';
import citiesActions from '../redux/actions/citiesActions';
import {connect} from 'react-redux';
import{NavLink} from 'react-router-dom'
 

class Filtro extends React.Component{  
    render(){
    return(
        <>
            <div className="buscador">
                <input type="text" id="buscar" placeholder="Search here!" onChange ={e => {this.props.buscar(e.target.value)}}/>
            </div>
            <div className="page-cities">
                 {this.props.filterCities.length === 0 ? <h1 className="ops">Oops! no results found ...Please try again</h1>
                  : this.props.filterCities.map((ciudad , _id) => {
                    return(<NavLink to = {`/city/${ciudad._id}`} className="city-select" key={ciudad._id} >
                                <div id="select-image" key={ciudad.path} style = {{backgroundImage:`url(${ciudad.path})`,width:"35vw",height:"36vh",margin:"1vh",backgroundSize:"cover"}}>
                                    <h1 key={ciudad.city} className="title-cities">{ciudad.city} </h1>
                                </div>
                            </NavLink>
                        )}
                )}
            </div>
        </> 
    )
}
}
 const mapStateToProps = state => {
    return{
        filterCities: state.city.filterCities
        }  
    }
    const mapDispatchToProps ={
        buscar: citiesActions.filterCities
    }
export default connect (mapStateToProps, mapDispatchToProps)(Filtro)
    