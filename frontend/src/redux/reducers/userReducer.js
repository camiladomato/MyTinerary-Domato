const initialState = {
    userLogged: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_USER':
            // 🛡️ FILTRO DE SEGURIDAD: Solo guardamos en LocalStorage y en el estado
            // si el payload es un objeto válido de usuario que contiene un token.
            if (action.payload && action.payload.token) {
                localStorage.setItem('userLogged', JSON.stringify({
                    name: action.payload.name, 
                    urlImage: action.payload.urlImage
                }))
                localStorage.setItem('token', action.payload.token)
                
                return {
                    ...state,
                    userLogged: action.payload
                }
            }
            
            // Si el payload es null, un error de Joi, o no trae token, limpiamos el estado de usuario
            return {
                ...state,
                userLogged: null
            }

        case 'LOGOUT_USER':
            localStorage.removeItem('userLogged')
            localStorage.removeItem('token') // Aprovechamos a limpiar el token también al desloguear
            return {
                ...state,
                userLogged: null
            }
        
        default:
            return state
    }
}

export default userReducer