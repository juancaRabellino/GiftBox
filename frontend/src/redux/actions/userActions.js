import axios from "axios"
import { response } from "express"

const userActions={
    crearCuenta: (formNuevoUsuario) => {
        console.log(formNuevoUsuario)
        console.log("ACTIONS")
        return async (dispatch, getState) => {
            const data = await axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{headers:{"Content-type":"multipart:form-data"}})            
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

            // dispatch({type: 'INICIAR_SESION', payload: data.data.response})
            console.log("ESTOY EN ACTION")
            console.log(data.response)
        }
    },
    crearCuentaGoogle: (nuevoUsuario) =>{

        return async (dispatch, getState) =>{
        const data = await axios.post("http://localhost:4000/api/usuarios", nuevoUsuario)
        .then(response =>console.log(response))
        .catch(error=> console.log(error)) 
        }
    },
    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CERRAR_SESION'})
        }
    },
    logFromLS: (token) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('http://localhost:4000/api/usuarios/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                dispatch({type: 'INICIAR_SESION', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
                localStorage.clear()
            }
        }
    },
    
    logOut:()=>{
        return (dispatch, getState)=>{
            try{
                dispatch({type:"LOG_OUT"})
            }
            catch(err){
                console.log(err)
            }
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