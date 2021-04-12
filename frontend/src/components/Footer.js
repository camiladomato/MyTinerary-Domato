import React from 'react'
import{NavLink} from 'react-router-dom'

const Footer=()=>{
    return(
 <div>
    <div>   
        <div  className="footer">
            <div className="social">
                <img src="./assets/fb.png" alt="facebook" className="img-social"/>
                <img src="./assets/inst.png" alt="instangram" className="img-social"/>
                <img src="./assets/wsp.png" alt="whatsapp" className="img-social"/>
            </div>
            <div className="link-footer">
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