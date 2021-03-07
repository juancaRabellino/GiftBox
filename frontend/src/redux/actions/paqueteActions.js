import axios from 'axios'

const paqueteActions = {
  obtenerTodosLosPaquetes: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('http://localhost:4000/api/paquetes')
        dispatch({type: 'TODOS_PAQUETES', payload: response.data.response})
        console.log(response)
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
      } catch (error) {
        console.log(error) 
      }
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
    return(dispatch,getState)=>{
      axios.put(`http://localhost:4000/api/paquetes/${_id}`,usuarioYvaloracion)
      .then(response=>
        {console.log(response.data.response)
          dispatch({type:"ENVIAR_VALORACION",payload:response})})
      .catch(error=>console.log(error))
    }
  }
  }
  
    

export default paqueteActions;