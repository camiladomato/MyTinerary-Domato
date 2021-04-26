import React from 'react'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import Carrousel from '../components/Carrousel'

class Home extends React.Component {
    render(){
        return(
            <div className="homeContainer">  
                <Hero/>
                <CallToAction/>
                <Carrousel/> 
            </div>
        )
    }
}

export default Home;
