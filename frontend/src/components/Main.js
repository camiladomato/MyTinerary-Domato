import React from 'react'
import{NavLink} from 'react-router-dom'

const Main=()=>{
   
    return(
    
        <main className="container-title" style={{backgroundImage:"url('./assets/viajar.jpeg')"}} >
           
           <section>
                <div className="title">
                    <h1 >MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
                <div>
                <p>let's travel to the place of your dreams ...</p>
                <NavLink exact to="/Cities"><h2 className="link-city"><img src="../assets/avion.png" alt=" " className="link-city" /></h2></NavLink>
                   
                    
                </div>
            </section>
            
        </main>
    )
}

export default Main
