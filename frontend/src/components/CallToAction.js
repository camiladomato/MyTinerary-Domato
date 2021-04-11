import React from 'react' 
import{NavLink} from 'react-router-dom'


const CallToAction=()=>{

  return (
    <div>
    <p className="txt-call">let's travel to the place of your dreams ...</p>
    <NavLink exact to="/Cities"  className="Call">
        <h2 className="link-city">Lest GO?</h2>
    </NavLink>
    </div>
  )

}

export default CallToAction