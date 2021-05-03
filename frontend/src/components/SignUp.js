import { useState } from 'react'
import  GoogleLogin  from 'react-google-login';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';



const SignUp = (props) => {
    const [newUser,setNewUser] = useState ({name:"",lastName:"",email:"",password:"",urlImage:"",country:""})
    const [errores, setErrores] = useState ([])
    const readInput= e => {
        const campo = e.target.name
        const valor = e.target.value
        setNewUser({
            ...newUser,
            [campo]:valor
        })
    }

    const send = async (e = null , googleUser = null) => { 
        e && e.preventDefault()
        let user = e ? user : googleUser
        const respuesta = await props.crearUsuario(newUser)
        if (respuesta){
            setErrores(respuesta.details)
        }
       
    }
    const responseGoogle = (response) => {
       const {givenName,familyName,email,googleId,imageUrl} = response.profileObj
       send({name: givenName, lastName: familyName , email: email ,password: googleId , urlImage:imageUrl, country: givenName}) 
    }

    var paises = ["Russia","Argentine","France","Spain","United States","Germany","Italy","Mexico"] 
    return (  
            <div  className="sign-up" style={{backgroundImage:`url(/assets/fondo-formulario.jpg)`}} >
                <form className="formulario-signUp">
                <h1 className="title-form">Create an account</h1>
                <input type="text" placeholder="Enter your Name" name="name" value={newUser.name} onChange={readInput}/>
                <input type="text" placeholder="Enter your LastName" name="lastName"  value={newUser.lastName}  onChange={readInput}/>
                <input type="email" placeholder="Enter your Email" name="email"  value={newUser.email} onChange={readInput}/>
                <input type="password" placeholder="Enter your Password" name="password"  value={newUser.password} onChange={readInput}/>
                <input type="text" placeholder="Enter your Photo(url)" name="urlImage" value={newUser.urlImage} onChange={readInput}/>
                    <select name="country" value={newUser.country} placeholder="country" onChange={readInput}>
                        <option>Choose your country</option>
                        {paises.map(pais =>{
                            return (<option name="country" placeholder="pais" key={pais} value={pais}>{pais}</option>)
                        })}
                    </select>  
                <button onClick={send}>Send</button>
                <GoogleLogin
                    clientId="51994203609-6pfr06m9b9vn7tcr4lrad0nrgm1i42b8.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,          
            </form>
            <div>
                {errores.map(error => <h1>{error}</h1>)}
            </div>
            </div>
            )
}

const mapDispatchToProps ={
 crearUsuario: userActions.crearUsuario
}


export default connect (null , mapDispatchToProps)(SignUp)