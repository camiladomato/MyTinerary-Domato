import React from 'react' 
import{NavLink} from 'react-router-dom'
import {connect}  from 'react-redux'
import userActions from '../redux/actions/userActions'

const Header=(props)=>{
   

    var usuario = (props.userLogged && typeof props.userLogged === 'object' && props.userLogged.name)
        ? props.userLogged.name
        : ' '
   
    var fotoUser = '/assets/signup.png' 
    
    if (props.userLogged && typeof props.userLogged === 'object') {
        if (props.userLogged.urlImage) {
            fotoUser = props.userLogged.urlImage
        } else if (props.userLogged.imageUrl) {
            fotoUser = props.userLogged.imageUrl
        }
    }
return(
     
    <header className="nav-h" >
                <div className="enlaces">
                    <NavLink exact to="/"><h2 className="link">Home</h2></NavLink>
                    <NavLink exact to="/cities"><h2 className="link">Cities</h2></NavLink>
                </div>
                <h3 className="link">¡Welcome {usuario} !</h3>
               {!props.userLogged && (
                    <div className="enlaces">
                        <NavLink to="/signup"><h2 className="link">Sign Up</h2></NavLink>
                        <NavLink to="/signin"><h2 className="link">Sign In</h2></NavLink>
                    </div>
                )}
                {props.userLogged && <h2 className="link" onClick={props.desloguarUsuario}>sign Out</h2>}
                    <div className="enlaces"> 
                        <div className="foto-user" style= {{ backgroundImage :`url(${fotoUser})`}}></div> 
                    </div>
    </header>
    )
}

const mapStateToProps = state => {
    return {
        userLogged : state.user.userLogged
    }
}
const mapDispatchToProps ={
    desloguarUsuario: userActions.desloguarUsuario
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)

