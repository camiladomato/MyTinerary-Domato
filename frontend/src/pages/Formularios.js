import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'


const Formularios = (props) => {
let menu = props.match.params.cambiar 
  return (  
   <div>
      { menu === "signin" 
      ? <SignIn />
      : <SignUp />  
     }
   </div>
    )
}

export default Formularios