import { useState, useEffect } from 'react'
import  GoogleLogin  from 'react-google-login';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';
import { useHistory } from 'react-router-dom';



const SignUp = (props) => {
    const history = useHistory()
 
    const [newUser,setNewUser] = useState ({name:"",lastName:"",email:"",password:"",urlImage:"",country:""})
    const [errores, setErrores] = useState ([])
    
    useEffect(() => {
        if (props.user) {
            history.push('/cities')
        }
    }, [props.user, history])
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
         var user = e ? newUser : googleUser
        const respuesta = await props.crearUsuario(user)
        console.log("ESTO MANDÓ EL BACKEND A USER ACTIONS:", respuesta)
        if (respuesta && respuesta.success) {
            setNewUser({ name: "", lastName: "", email: "", password: "", urlImage: "", country: "" })
            setErrores([])
            history.push('/cities')
        } else if (respuesta) {
    
        if (typeof respuesta === 'string') {
            setErrores([respuesta])
        } 
       
        else if (respuesta.error && typeof respuesta.error === 'string') {
            setErrores([respuesta.error])
        }
        
        else if (respuesta.error && respuesta.error.details) {
            const mensajesLimpios = respuesta.error.details.map(err => err.message)
            setErrores(mensajesLimpios) 
        }
        
        else if (respuesta.errores) {
            const erroresFormateados = Array.isArray(respuesta.errores) 
                ? respuesta.errores.map(err => err.message || err)
                : [respuesta.errores.message || respuesta.errores]
            setErrores(erroresFormateados)
        }
        
        else {
            setErrores(["Hubo un error en el formulario, revisá los datos."])
        }
    }
}
    const responseGoogle = (response) => {
       const {givenName,familyName,email,googleId,imageUrl} = response.profileObj
       send(null,{name: givenName, 
        lastName: familyName ,
         email: email ,
         password: googleId , 
         urlImage:imageUrl,
          country: givenName,
        from: 'google'
    }) 
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
            <div className="contenedor-errores">
    {/* 🛡️ Si es un array de Joi con detalles */}
    {errores?.error?.details ? (
        errores.error.details.map((err, index) => <h1 key={index} style={{ color: 'red', fontSize: '1rem' }}>{err.message}</h1>)
    ) : 
    /* 🛡️ Si viene una propiedad .error suelta que sea objeto */
    errores?.error && typeof errores.error === 'object' ? (
        <h1 style={{ color: 'red', fontSize: '1rem' }}>{errores.error.message || JSON.stringify(errores.error)}</h1>
    ) : 
    /* 🛡️ Si errores es un array directo de strings */
    Array.isArray(errores) ? (
        errores.map((error, index) => <h1 key={index} style={{ color: 'red', fontSize: '1rem' }}>{error.message || error}</h1>)
    ) : 
    /* 🛡️ Si es un string común o un objeto desconocido, lo forzamos a texto */
    errores ? (
        <h1 style={{ color: 'red', fontSize: '1rem' }}>{errores.message || (typeof errores === 'object' ? JSON.stringify(errores) : errores)}</h1>
    ) : null}
</div>
            </div>
            )
}
const mapStateToProps = (state) => {
    return {
       user: state.user.userLogged
    }
}
const mapDispatchToProps ={
 crearUsuario: userActions.crearUsuario
}


export default connect (mapStateToProps , mapDispatchToProps)(SignUp)