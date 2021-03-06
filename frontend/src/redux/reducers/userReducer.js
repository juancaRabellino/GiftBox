const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            console.log(action.payload)
            localStorage.setItem('nombre', action.payload.response.name)
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('imagen', action.payload.response.imagen)
            localStorage.setItem('_id', action.payload.response._id)
            localStorage.setItem('googleUser', action.payload.response.googleUser)
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

            case "RESETEAR_PASSWORD":
                return{
                    ...state,
                    loggedUser:action.payload
                }
               
                case 'CAMBIAR_PASSWORD':
                    return{
                        ...state,
                        loggedUser:action.payload
                    }
        default:
        return state
    }
}

module.exports = userReducer