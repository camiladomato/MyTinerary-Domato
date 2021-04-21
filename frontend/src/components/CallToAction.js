import React from 'react' 
import{NavLink} from 'react-router-dom'


const CallToAction=()=>{

  return (
  <div id="callTo">
        <p className="txt-call">let's travel to the place of your dreams ...</p>
      <NavLink exact to="/Cities"  className="Call">
        <h2 className="link-city">LET'S GO<img src="../assets/volar 3.png"  alt = " " className="user" ></img></h2>   
      </NavLink>
  </div>
  )
}
export default CallToAction