import React from 'react'
import backgroundVideo from '../public/assets/volar.mov'


const Hero=()=>{
   
    return(
    
        <main className="container-title">
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type="video/mov"></source>
            </video>
                <div>
                    <h1 className="title">MyTinerary</h1>
                    <p className="p-title">Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
    
        </main>
    )

        
}

export default Hero
