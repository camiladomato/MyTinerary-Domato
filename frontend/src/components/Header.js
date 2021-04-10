import React from 'react' 
import{NavLink} from 'react-router-dom'

const Header=()=>{
    return(
    <header >
        <div className="nav">
            <div>
                <img src="../assets/logo2.png" className="logo" ></img>
            </div>
            <div className="enlaces">
                <NavLink exact to="/"><h2 className="link">Home</h2></NavLink>
                <NavLink exact to="/Cities"><h2 className="link">Cities</h2></NavLink>
            </div>
            <div>
                <img src="../assets/signup.png" className="logo" ></img>
            </div>
        </div>
    </header>
    )
}



export default Header

