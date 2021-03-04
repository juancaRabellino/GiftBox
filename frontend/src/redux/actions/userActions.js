import axios from "axios"

const userActions={
    crearCuenta: formNuevoUsuario => {
        return async (dispatch, getState) => {
            const data = await axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{headers:{"Content-type":"multipart:form-data"}})            
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

            // dispatch({type: 'INICIAR_SESION', payload: data.data.response})
            console.log("ESTOY EN ACTION")
            console.log(data.response)
        }
    },

    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CERRAR_SESION'})
        }
    },


    iniciarSesion: (usuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/login', usuario)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'INICIAR_SESION', payload: respuesta.data})
        }
    }
}
export default userActions;