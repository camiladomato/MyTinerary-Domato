

const initialState ={
    userLogged: null,
}

const userReducer = (state = initialState , action) => {
    switch(action.type){
        case'LOG_USER':
            if(action.payload){
                localStorage.setItem('userLogged', JSON.stringify({name:action.payload.name, urlImage: action.payload.urlImage}))
                localStorage.setItem('token',action.payload.token)
            }
        return {
            ...state,
            userLogged : action.payload
        }
        case'LOGOUT_USER':
        localStorage.removeItem('userLogged')
        return {
            ...state,
            userLogged: null
        }
        
        default:
            return state
    }
}
export default userReducer