import axios from "axios"

const userActions={
    crearCuenta: (formNuevoUsuario) => {
        return async (dispatch,getstate) => {
            try{
              const data = await axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{
                headers: {"Content-Type": "multipart: form-data"}
              }); 
              console.log(data.data.success)
              if (data.data.success){
                console.log(data.data.response)
                console.log("ACTIONS")                
                dispatch({type:'INICIAR_SESION', payload:data.data})
                return data.data.response
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
                console.log(respuesta)
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
        console.log(usuario)
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/login', usuario)
            if (!respuesta.data.success) {
                console.log(respuesta)
                return respuesta.data
            }
            dispatch({type:'INICIAR_SESION', payload: respuesta.data})
        }
    },
    editUsuarioPass : (editUsuario, id) => {
        console.log('llegue')
        return async (dispatch, getState)=> {
            const respuesta = await axios.put(`http://localhost:4000/api/usuarios/${id}`, editUsuario)
            console.log(respuesta)
            if(!respuesta.data.success){
            console.log('me fui')
            return respuesta.data 
        }
        }
    },
    editarUsuarioImg : (formNuevaImg, id) => {
        console.log('llegue a Imagen')

        return async (dispatch, getState)=> {
            const respuesta = await axios.put(`http://localhost:4000/api/imagen/${id}`, formNuevaImg)
            console.log(respuesta)
            if(!respuesta.data.success){
            console.log('me fui')
            return respuesta.data 
        }
        }
    }
}
export default userActions;