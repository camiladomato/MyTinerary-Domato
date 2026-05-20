import { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
    const history = useHistory()
 
    const [newUser, setNewUser] = useState({ name: "", lastName: "", email: "", password: "", urlImage: "", country: "" })
    const [errores, setErrores] = useState([]) // Siempre será un array de strings planos
    
    useEffect(() => {
        if (props.user) {
            history.push('/cities')
        }
    }, [props.user, history])

    const readInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setNewUser({
            ...newUser,
            [campo]: valor
        })
    }

    const send = async (e = null, googleUser = null) => { 
        e && e.preventDefault()
        var user = e ? newUser : googleUser
        const respuesta = await props.crearUsuario(user)
        
        console.log("ESTO MANDÓ EL BACKEND A USER ACTIONS:", respuesta)
        
        if (respuesta && respuesta.success) {
            setNewUser({ name: "", lastName: "", email: "", password: "", urlImage: "", country: "" })
            setErrores([])
            history.push('/cities')
        } else if (respuesta) {
            // 🛡️ Proceso ultra seguro para transformar CUALQUIER error del back en string plano
            let listaErrores = [];

            if (typeof respuesta === 'string') {
                listaErrores.push(respuesta);
            } else if (respuesta.error) {
                if (typeof respuesta.error === 'string') {
                    listaErrores.push(respuesta.error);
                } else if (respuesta.error.details) {
                    listaErrores = respuesta.error.details.map(err => err.message);
                } else if (respuesta.error.message) {
                    listaErrores.push(respuesta.error.message);
                } else {
                    listaErrores.push(JSON.stringify(respuesta.error));
                }
            } else if (respuesta.errores) {
                listaErrores = Array.isArray(respuesta.errores) 
                    ? respuesta.errores.map(err => err.message || err)
                    : [respuesta.errores.message || respuesta.errores];
            } else {
                listaErrores.push("Hubo un error en el formulario, revisá los datos.");
            }

            setErrores(listaErrores);
        }
    }

    const responseGoogle = (response) => {
       const { givenName, familyName, email, googleId, imageUrl } = response.profileObj
       send(null, {
            name: givenName, 
            lastName: familyName,
            email: email,
            password: googleId, 
            urlImage: imageUrl,
            country: givenName,
            from: 'google'
       }) 
    }

    var paises = ["Russia", "Argentine", "France", "Spain", "United States", "Germany", "Italy", "Mexico"] 
    
   return (  
    <div className="sign-up" style={{ backgroundImage: `url(/assets/fondo-formulario.jpg)` }} >
        <form className="formulario-signUp" autoComplete="none">
            <h1 className="title-form">Create an account</h1>
            
            <input type="text" name="email" style={{ display: 'none' }} autoComplete="none" />
            <input type="password" name="password" style={{ display: 'none' }} autoComplete="none" />
            
           
            <input type="text" placeholder="Enter your Name" name="name" value={newUser.name} onChange={readInput}/>
            <input type="text" placeholder="Enter your LastName" name="lastName" value={newUser.lastName} onChange={readInput}/>
            
            <input 
                type="text" 
                placeholder="Enter your Email" 
                name="email" 
                autoComplete="new-off"
                value={newUser.email} 
                onChange={readInput}
            />
            
            <input 
                type="password" 
                placeholder="Enter your Password" 
                name="password" 
                autoComplete="new-password"
                value={newUser.password} 
                onChange={readInput}
            />
            
            <input type="text" placeholder="Enter your Photo(url)" name="urlImage" value={newUser.urlImage} onChange={readInput}/>
            
            <select name="country" value={newUser.country} onChange={readInput}>
                <option value="">Choose your country</option>
                {paises.map(pais => {
                    return (<option key={pais} value={pais}>{pais}</option>)
                })}
            </select>  
            
            <button onClick={send}>Send</button>
            
            <GoogleLogin
                clientId="51994203609-6pfr06m9b9vn7tcr4lrad0nrgm1i42b8.apps.googleusercontent.com"
                buttonText="Sign Up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />          
        </form>

        <div className="contenedor-errores">
            {Array.isArray(errores) && errores.map((error, index) => (
                <h1 key={index} style={{ color: 'red', fontSize: '1rem' }}>
                    {typeof error === 'object' ? JSON.stringify(error) : error}
                </h1>
            ))}
        </div>
    </div>
)
}
const mapStateToProps = (state) => {
    return {
      
       user: state.user ? state.user.userLogged : null
    }
}

const mapDispatchToProps = {
    crearUsuario: userActions.crearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)