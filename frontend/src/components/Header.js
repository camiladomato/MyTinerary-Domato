import React from 'react' 
import{NavLink} from 'react-router-dom'

const Header=()=>{
    return(
        <header>
            <NavLink exact to="/"><h2>Home</h2></NavLink>
            <NavLink exact to="/cities"><h2>Cities</h2></NavLink>
        </header>
    )
}

export default Header

