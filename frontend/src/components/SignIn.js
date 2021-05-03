import { useState } from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import  GoogleLogin  from 'react-google-login'


const SignIn = (props) => {
    const [userLoggedIn,setUserLoggedIn] =(useState({email:"",password:""}))
    
    const readInputForm= e => {
        const campo = e.target.name
        const valor = e.target.value
        setUserLoggedIn({
            ...userLoggedIn,
            [campo]:valor
        })
    }

    const sendForm =async (e = null , googleUser = null) =>{
        e.preventDefault()
        var user = e ? userLoggedIn : googleUser
        props.loguearUsuario(user)
       
    }
    const responseGoogle = (response) => {
        if(response.profileObj.email){
            sendForm(null,{email: response.profileObj , password: 'a'+response.profileObj.googleId}) 
        }
        else{
            alert("error inesperado")
        }
    }    

    return (
        <div className="sign-in" style={{backgroundImage:`url(/assets/viajar.jpeg)`}} >
            <form className="formulario-signIn">
                <h1 className="title-form">Login to account</h1>
                <input type="email" placeholder="Enter your Email" name="email" value={userLoggedIn.email} onChange={readInputForm}/>
                <input type="password" placeholder="Enter your Password" name="password" value={userLoggedIn.password} onChange={readInputForm}/>
                <button onClick={sendForm}>Send</button>
                <GoogleLogin
                    clientId="51994203609-6pfr06m9b9vn7tcr4lrad0nrgm1i42b8.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,                    
            </form>
        </div>
    )}


const mapDispatchToProps ={
    loguearUsuario : userActions.loguearUsuario
}

export default connect(null,mapDispatchToProps)(SignIn)