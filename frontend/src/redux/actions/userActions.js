import axios from "axios"
import Swal from'sweetalert2';


const userActions={
    crearCuenta: (formNuevoUsuario) => {
        return async (dispatch,getstate) => {
            try{
              const data = await axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{
                headers: {"Content-Type": "multipart: form-data"}
              }); 
              if (data.data.success){
                console.log(data.data.response)
                dispatch({type:'INICIAR_SESION', payload:data.data.response})
              } else{
                return data.data
              }
              }catch(error){
                const data =[{errors:'Paso algo...'}]
                return data.data
              }
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
 
    resetearPassword: (cuenta)=> {
        return async (dispatch) => {
            try{
                const response = await axios.post('http://localhost:4000/api/user/resetear-password', {cuenta})
                console.log(response)
                dispatch({type: 'RESETEAR_PASSWORD'})
            }catch(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Ups!',
                    text: "Algo salio mal, intenta nuevamente!",
                    showConfirmButton: false,
                    timer: 4000
                    })
            }
        }
    },

    nuevaPassword: (cuenta, password) => {
        return async(dispatch) => {
            try{
                const response = await axios.put('http://localhost:4000/api/user/cambiar-password', {cuenta, password})
                dispatch({type: 'CAMBIAR_PASSWORD'})
            }catch(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Ups!',
                    text: "Algo salio mal, intenta nuevamente!",
                    showConfirmButton: false,
                    timer: 4000
                    })
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