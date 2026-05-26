import React from 'react'
import CallToActionCity from '../components/CallToActionCity';
import {connect} from 'react-redux';
import citiesAction from '../redux/actions/citiesActions';
import {useEffect,useState} from 'react'
import itineraryActions from '../redux/actions/itineraryActions';
import { Accordion, Card, Button } from 'react-bootstrap'
import Comments from './Comments';
import Activities from '../components/Activities'





const City =(props) => { 
  
    const [citySelect, setCitySelect] = useState(null)
    const idUrl = props.match.params.id;
   
    useEffect(()=>{
       
        if (props.listaCities.length === 0) {
            props.history.push("/Cities")
        } else {
            const encontrada = props.listaCities.find(city => city._id === idUrl)
            setCitySelect(encontrada)
            props.cargarItinerarios(idUrl)
        }
    }, [props.listaCities, idUrl, props.history]) 

    if (!citySelect) {
        return <h1 style={{ paddingTop: "100px", textAlign: "center" }}>Loading City Details...</h1>
    }
   
    return (
      <div className="fondo-city-itinerario">
        <div className="city-image">
            <div id="city-info" style={{ backgroundImage: `url(${citySelect.path})`, width: "50vw", height: "60vh", margin: "1vh", backgroundSize: "cover" }}>
                <h1 className="title-city">{citySelect.city}</h1>
            </div>
            <div className="info">
                <p>{citySelect.info}</p>
            </div>
        </div>

        {!props.listaItinerary.length ? (
            <h2 className="txt-dont">We don't have any itineraries yet!</h2>
        ) : (
            <div className="imagenes-iti" style={{ backgroundImage: `url(/assets/mapa.jpg)` }} > 
                {props.listaItinerary.map((itinerary) => {
                    return (
                        <div className="itinerary" key={itinerary._id}>
                            <h2>{itinerary.title}</h2>
                            <div className="foto-itinerario" style={{ backgroundImage: `url(${itinerary.authorImg})`, width: "20vw", height: "30vh", margin: "1vh", backgroundSize: "cover" }} /> 
                            <h3>{itinerary.authorName}</h3>
                            
                            <div>
                                <p>{Array(itinerary.price).fill(<img src="/assets/billete.png" alt="money" className="icono" />)}</p>
                                <p>{Array(itinerary.duration).fill(<img src="/assets/reloj.png" alt="time" className="icono" />)}</p>
                                <p><img src="/assets/megusta.png" className="icono" alt="like" /> {itinerary.like}</p>
                            </div>
                            
                            <h4 className="hashtag">{itinerary.hashtag}</h4>
                            
                          
                            <Accordion>
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <Accordion.Collapse eventKey="collapse-itinerary">
                                        <Card.Body>
                                            <Activities itineraries={itinerary} />
                                            <Comments comentarios={itinerary} />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    
                                   
                                    <Accordion.Toggle as={Button} variant="link" eventKey="collapse-itinerary" className="view-more-btn">
                                        View More / Less
                                    </Accordion.Toggle>
                                </Card>
                            </Accordion>
                        </div>
                    )
                })}
            </div>
        )}
        
        <CallToActionCity />
      </div>
    )
}
  

const mapStateToProps = state =>{
    return{
        listaCities: state.city.cities,
        listaItinerary: state.itinerary.itinerarios,
          
    }
}
const mapDispatchToProps = {
        cargarCiudades: citiesAction.cargarCities,
        cargarItinerarios: itineraryActions.cargarItinerarios,
       
}  
export default connect (mapStateToProps, mapDispatchToProps) (City)

