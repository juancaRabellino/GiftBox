import axios from 'axios'

const productoActions = {
  obtenerTodosLosProductos: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('http://localhost:4000/api/productos')
        dispatch({type: 'TODOS_PRODUCTOS', payload: response.data.response})
        console.log(response.data.response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerProductosPorPaquete: (_id)=>{
    return async (dispatch, getState) => {
      axios.get(`http://localhost:4000/api/productos/paquete/${_id}`)
      .then(response=>console.log(response.data))
      .catch(error=>console.log(error))
    }
  }
    
}
export default productoActions;