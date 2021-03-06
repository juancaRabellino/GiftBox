const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            console.log("INICIAR SESION REDUCER  ------------------------------- ")
            console.log(action.payload)
            localStorage.setItem('nombre', action.payload.response.nombre)
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('imagen', action.payload.response.imagen)
            localStorage.setItem('id', action.payload.response.id)
            localStorage.setItem('googleUser', action.payload.response.googleUser)
            
            console.log(action.payload)
            return {
                ...state,
                loggedUser: action.payload.response
            }   
        case 'LOG_OUT':
            localStorage.clear();
            return {
                ...state,
                loggedUser:null
            }             
        default:
        return state
    }
}

module.exports = userReducer