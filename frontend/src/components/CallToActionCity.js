import React from 'react' 
import{NavLink} from 'react-router-dom'

const CallToActionCity=()=>{
  return (
  <div id="callTo2">
      <NavLink exact to="/Cities"  className="Call">
        <h2 className="link-city">Cities<img src="../assets/volar 3.png"  alt = " " className="user" ></img></h2>   
      </NavLink>
  </div>
  )
}
export default CallToActionCity