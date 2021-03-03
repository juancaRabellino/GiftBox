import axios from 'axios'

const paqueteActions = {
  obtenerTodosLosPaquetes: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('http://localhost:4000/api/paquetes')
        dispatch({type: 'TODOS_PAQUETES', payload: response.data.response})
        console.log(response.data.response)
      } catch (error) {
        console.log(error)
      }
    }
  }
    
}
export default paqueteActions;