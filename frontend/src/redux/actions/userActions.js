import axios from 'axios'

const userActions={
    crearUsuario:(newUser) => {
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if(!respuesta.data.success){
               alert(respuesta.data.error)
            }
            dispatch({
                type:'LOG_USER',
                payload: respuesta.data.success ? respuesta.data.respuesta : null
            })
        }

    },
    loguearUsuario:(userLoggedIn) => {
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/user/signin', userLoggedIn)
            if(!respuesta.data.success){
                return respuesta.data.errores
                }
            dispatch({
                type:'LOG_USER', 
                payload: respuesta.data.success ? respuesta.data.respuesta : null})
        }

    },
    desloguarUsuario:() => {
        return(dispatch, getState)=>{
            dispatch({type:'LOGOUT_USER'})
        }
    },
    loginForzadoPorLocalS:(userLS) => {
        return async (dispatch , getState) =>{
            try{
                const respuesta = await axios.get ('http://localhost:4000/api/loginLS',{
                headers:{
                    'Authorization':'Bearer'+ userLS.token
                 }
                })
                dispatch({type:'LOG_USER', payload:{
                    ...respuesta,
                    token: userLS.token
                }})
            }
            catch(error){
                if(error.response.status === 401){
                    alert("token invalido")
                }
            }
           
        }
    }
}

export default userActions