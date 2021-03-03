import axios from "axios"

const userActions={
    crearCuenta: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/usuarios/register', nuevoUsuario)
           if (!respuesta.data.success) {
               return respuesta.data
           }
            dispatch({type: 'INICIAR_SESION', payload: respuesta.data})
        }
    },

    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CERRAR_SESION'})
        }
    },


    iniciarSesion: (usuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/login', usuario)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'INICIAR_SESION', payload: respuesta.data})
        }
    }
}
export default userActions;