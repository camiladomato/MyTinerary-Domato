import React from 'react'
import Header from '../components/Header'

export default class Home extends React.Component {
    render(){
        return(
            <div className="homeContainer">
                <Header/>
                <h1>MyTinerary</h1>
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
            </div>

        )
    }
}