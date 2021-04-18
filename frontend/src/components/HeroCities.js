import React from 'react'
import backgroundVideo from './video/paisaje.mp4'


const HeroCities =()=>{
   
    return(
    
        <main className="container-title-cities">
            <video autoPlay loop muted id="video2">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
                <div className="titles">
                    <div className="title-logo">
                        <img src="../assets/logo4.png" alt=" " className="logo" ></img>
                        <h1 className="title">MyTinerary</h1>
                    </div>
                        <p className="p-title">Cities!</p>
                </div>
        </main>
    )

        
}

export default HeroCities
