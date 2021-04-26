import React from 'react'
import CallToActionCity from '../components/CallToActionCity';
import {connect} from 'react-redux';
import citiesAction from '../redux/actions/citiesActions';
import {useEffect,useState} from 'react'
import itineraryActions from '../redux/actions/itineraryActions';
import {Accordion, Card} from 'react-bootstrap' 




const City =(props) => {  
    console.log(props)
      
    const [citySelect, setCitySelect] = useState(null)
    const [propiedad,setPropiedad] = useState(true)
   
    useEffect(()=>{setCitySelect(props.listaCities.find(city => city._id === props.match.params.id))
    props.cargarItinerarios(props.match.params.id)
    } , []) 

   
    if(props.listaCities.length === 0){
        props.history.push("/Cities")
    }
    if (!citySelect ) {
        return <h1>Loading...</h1>
    }
 
    return(
    
      <div className="fondo-city-itinerario">
        <div className="city-image">
            <div id="city-info" style = {{backgroundImage:`url(${citySelect.path})`,width:"50vw",height:"60vh",margin:"1vh",backgroundSize:"cover"}}>
                    <h1 className="title-city">{citySelect.city}</h1>
            </div>
            <div className="info">
                    <p>{citySelect.info}</p>
                </div>
            
        </div>
        <div>
        
        </div> 
        {!props.listaItinerary.length ? <h2 className="txt-dont">We don't have any itineraries yet!</h2>
        : <div className="imagenes-iti" style={{backgroundImage:`url(/assets/viajar.jpeg)`}} > 
        {props.listaItinerary.map((itinerary)=>{
        return(
            <div className="itinerary">
                        <h2>{itinerary.title}</h2>
                        <div className="foto-itinerario" style ={{backgroundImage:`url(${itinerary.authorImg})`,width:"20vw",height:"30vh",margin:"1vh",backgroundSize:"cover"}} > 
                        </div> 
                        <h3>{itinerary.authorName}</h3>
                            <div>
                                <p>{Array(itinerary.price).fill(<img src="/assets/billete.png" className="icono"/>)} </p>
                                <p>{Array(itinerary.duration).fill(<img src="/assets/reloj.png" className="icono"/>)} </p>
                                <p><img src="/assets/megusta.png" className="icono"/>{itinerary.like}</p>
                            </div>
                        <h4 className="hashtag">{itinerary.hashtag}</h4>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <h3 className="under-c">Under Construction</h3>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => setPropiedad(!propiedad)}>
                            {propiedad ? "View more..." : "View less..."}
                        </Accordion.Toggle>
                    </Card>
                </Accordion>

            </div>)

                })
        }
        
    </div>
    }
           <CallToActionCity/>
           

     </div>
    )
}

const mapStateToProps = state =>{
    return{
        listaCities: state.city.cities,
        listaItinerary: state.itinerary.itinerarios    
    }
}
const mapDispatchToProps = {
        cargarCiudades: citiesAction.cargarCities,
        cargarItinerarios: itineraryActions.cargarItinerarios
}  
export default connect (mapStateToProps, mapDispatchToProps) (City)

