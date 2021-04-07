import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'



export default class Home extends React.Component {
    render(){
        return(
            <div className="homeContainer">
                <Header/>
                <Main/>
                <Footer/>
            </div>

        )
    }
}