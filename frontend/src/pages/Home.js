import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import CallToAction from '../components/CallToAction'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'



export default class Home extends React.Component {
    render(){
        return(
            <div className="homeContainer">
                <Header/>
                <Main/>
                <CallToAction/>
                <Carrousel/>
                <Footer/>
            </div>

        )
    }
}