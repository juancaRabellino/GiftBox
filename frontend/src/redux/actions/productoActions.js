import axios from 'axios'
import Swal from 'sweetalert2'

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
  },
  cargarProducto: (nuevoProducto) => {  
    console.log(nuevoProducto)  
    return async (dispatch, getState) => {      
      try{
        const response = await axios.post('http://localhost:4000/api/productos',nuevoProducto, {
          headers: {"Content-Type": "multipart: form-data"}
        })
        dispatch({type:"CARGAR_PRODUCTO", payload: response.data.response})
      }
      catch(error){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Problema con la carga de Paquete!',
        })
      }
      
    }
  } 
    
}
export default productoActions;