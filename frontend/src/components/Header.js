import React from 'react' 
import{NavLink} from 'react-router-dom'


const Header=()=>{
    return(
    <header className="nav-h" >
                
                <div className="enlaces">
                    <NavLink exact to="/"><h2 className="link">Home</h2></NavLink>
                    <NavLink exact to="/Cities"><h2 className="link">Cities</h2></NavLink>
                </div>
                <div className="enlaces">
                    <NavLink exact to="/"><h2 className="link">Sign Up</h2></NavLink>
                    <NavLink exact to="/"><h2 className="link">Login</h2></NavLink>
                    <img src="../assets/signup.png"  alt = " " className="user" ></img>
                </div>       
    </header>
    )
}

export default Header

