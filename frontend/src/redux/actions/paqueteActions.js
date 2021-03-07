import axios from 'axios'

const paqueteActions = {
  obtenerTodosLosPaquetes: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('http://localhost:4000/api/paquetes')
        dispatch({type: 'TODOS_PAQUETES', payload: response.data.response})
    
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerPaquetesPorCategoria: (categoria) => {
    return  (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETES_CATEGORIA', payload: categoria})
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerPaquetePorId: (_id) => {
    return (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETE_ID', payload: _id})
        // return(getState().paqueteReducer.todosLosPaquetes.find(paquete => paquete._id  === _id))
      } catch (error) {
        console.log(error) 
      }
      return(getState().paqueteReducer.paquetePorId)
    }
  },
  filtrarPaquetesMasReg: () => {
    return (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETES_MAS_REG', payload: getState})
      } catch (error) {
        console.log(error)
      }
    }
  },
  filtrarPaquetes: (valor) => {
    return (dispatch, getState) => {
      try {
        dispatch({type: 'FILTRO', payload: valor})
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerValoracion:(paquete) =>{
     return(dispatch,getState)=> {
         dispatch({type:'PROMEDIO', payload:paquete })
        } 
     },
  enviarValoracion: (_id,usuarioYvaloracion)=>{
    return async (dispatch,getState)=>{
      const response= await axios.put(`http://localhost:4000/api/paquetes/${_id}`,usuarioYvaloracion)
      if(response.data.response){
        {  console.log("VALORACION NUEVA QUE MANDO AL BACK")
          console.log(response.data.response.valoracion)
          dispatch({type:"ENVIAR_VALORACION",payload:response.data.response})}
        }
    }
  }
  }
  
    

export default paqueteActions;