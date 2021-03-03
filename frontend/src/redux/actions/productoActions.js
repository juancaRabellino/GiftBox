import axios from 'axios'

const productoActions = {
  obtenerTodoslosProductos: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('http://localhost:4000/api/productos')
        dispatch({type: 'TODOS_PRODUCTOS', payload: response.data.response})
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerProductosPorPaquete: (_id)=>{
    return async (dispatch, getState) => {
      dispatch({type:"PRODUCTOS_DEL_PAQUETE", payload: _id})
    }
  }
    
}
export default productoActions;