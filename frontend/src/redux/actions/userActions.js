import axios from 'axios'

const userActions={
    crearUsuario:(newUser) => {
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('https://mitinerary-domato.herokuapp.com/api/user/signup', newUser)
            if(!respuesta.data.success){
               return respuesta.data.errores
            }
            dispatch({
                type:'LOG_USER',
                payload: respuesta.data.success ? respuesta.data.respuesta : null
            })
        }

    },
    loguearUsuario:(userLogged) => {
       
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('https://mitinerary-domato.herokuapp.com/api/user/signin', userLogged)
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
                const respuesta = await axios.get ('https://mitinerary-domato.herokuapp.com/api/user/loginLS',{
                    headers:{
                        'Authorization': 'Bearer ' + userLS.token
            
                    }
                })
                dispatch({type:'LOG_USER', payload:{
                    ...respuesta.data.respuesta,
                    token: userLS.token
                }})
            }
               
            catch(err) {                
                if (err.respuesta === 401) {
                localStorage.clear()
                    }
                }
        }
    }
}

export default userActions