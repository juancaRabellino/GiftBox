import axios from "axios"

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