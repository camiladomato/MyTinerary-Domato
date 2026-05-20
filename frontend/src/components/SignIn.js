import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
    const history = useHistory()
    const [userLoggedIn, setUserLoggedIn] = useState({ email: "", password: "" })
    
    useEffect(() => {
        if (props.user) {
            history.push('/cities')
        }
    }, [props.user, history]) 

    const readInputForm = e => {
        const campo = e.target.name
        const valor = e.target.value
        setUserLoggedIn({
            ...userLoggedIn,
            [campo]: valor
        })
    }

    const sendForm = async (e = null, googleUser = null) => {
        if (e) e.preventDefault()
        var user = e ? userLoggedIn : googleUser
        const res = await props.loguearUsuario(user)
        if (res && res.success) {
            setUserLoggedIn({ email: "", password: "" })
            history.push('/cities')
        } else {
            alert(res?.error || "Incorrect user or password")
        }
    }
        
    const responseGoogle = (response) => {
        if (response.profileObj?.email) {
            sendForm(null, { email: response.profileObj.email, password: response.profileObj.googleId }) 
        } else {
            alert("error inesperado")
        }
    }    

    return (
        <div className="sign-in" style={{ backgroundImage: `url(/assets/viajar.jpeg)` }} >
            <form className="formulario-signIn" autoComplete="none">
                <h1 className="title-form">Login to account</h1>
                
                <input type="text" name="email" style={{ display: 'none' }} autoComplete="none" />
                <input type="password" name="password" style={{ display: 'none' }} autoComplete="none" />
                
                <input 
                    type="text" 
                    placeholder="Enter your Email" 
                    name="email" 
                    autoComplete="new-off"
                    value={userLoggedIn.email} 
                    onChange={readInputForm}   
                />
                
                <input 
                    type="password" 
                    placeholder="Enter your Password" 
                    name="password" 
                    autoComplete="new-password"
                    value={userLoggedIn.password} 
                    onChange={readInputForm}     
                />
                
                <button onClick={sendForm}>Send</button> 
        
                <GoogleLogin
                    clientId="51994203609-6pfr06m9b9vn7tcr4lrad0nrgm1i42b8.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />   
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user.userLogged
    }
}

const mapDispatchToProps = {
    loguearUsuario: userActions.loguearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)