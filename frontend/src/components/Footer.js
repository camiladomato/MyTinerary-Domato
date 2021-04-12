import React from 'react'
import{NavLink} from 'react-router-dom'

const Footer=()=>{
    return(
 <div>
    <div>   
        <div  className="footer">
            <div className="social">
                <p>Social Media:</p>
                <p>Facebook</p>
                <p>Instangram</p>
            </div>
            <div>
                <NavLink exact to="/"><h2 className="link">Home</h2></NavLink>
                <NavLink exact to="/Cities"><h2 className="link">Cities</h2></NavLink>
            </div> 
        </div>
            <div className="name">
                <p>CAMILA DOMATO-</p>
                <p>COHORT 3 - MINDHUB</p>
            </div>
     </div>
</div>
    )
}

export default Footer