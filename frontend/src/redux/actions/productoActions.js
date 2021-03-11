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
    console.log("1111111111111111111111111111111111111111111111111111")
    return async (dispatch, getState) => {
      const response= await axios.get(`http://localhost:4000/api/productos/paquete/${_id}`)
      console.log(response.data)
      if (response.data.success===true){
        dispatch({type:"PRODUCTOS_DEL_PAQUETE", payload: response.data.response})
      }
    }
  }
    
}
export default productoActions;