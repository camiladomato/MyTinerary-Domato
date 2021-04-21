import React from 'react'
import backgroundVideo from './video/volar.mp4'

const Hero=()=>{
    return(
        <main className="container-title">
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
                <div className="titles">
                    <div className="title-logo">
                        <img src="../assets/logo4.png" alt=" " className="logo" ></img>
                        <h1 className="title">MyTinerary</h1>
                    </div>
                        <p className="p-title">Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
        </main>
    )       
}
export default Hero
