import axios from "axios"

const userActions={
    crearCuenta: (formNuevoUsuario) => {
        return async (dispatch,getstate) => {

            // axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{
            //     headers: {"Content-Type": "multipart: form-data"}
            //   })
            //   .then(response=>{console.log(response)})
            //   .catch(error=>console.log(error))


            try{
              const data = await axios.post("http://localhost:4000/api/usuarios",formNuevoUsuario,{
                headers: {"Content-Type": "multipart: form-data"}
              }); 
              console.log(data.data.success)
              if (data.data.success){
                console.log(data.data.response)
                console.log("ACTIONS")                
                dispatch({type:'INICIAR_SESION', payload:data.data.response})
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

   
}
export default userActions;