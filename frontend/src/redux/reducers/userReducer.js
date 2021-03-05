const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            localStorage.setItem('nombre', action.payload.response.name)
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('imagen', action.payload.response.imagen)
            localStorage.setItem('_id', action.payload.response._id)
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'CERRAR_SESION': 
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
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