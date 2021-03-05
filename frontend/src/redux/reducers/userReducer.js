const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            localStorage.setItem('nombre', action.payload.response.name)
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('imagen', action.payload.response.imagen)
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
        default:
        return state
    }
}

module.exports = userReducer