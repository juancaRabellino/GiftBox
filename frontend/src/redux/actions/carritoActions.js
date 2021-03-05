import axios from 'axios'

const carritoActions = {
  agregarAlCarrito: ({nombre,_id,cantidad,precio,descripcion}) => {
    return async (dispatch, getState) => {
        dispatch({type:"AGREGAR_AL_CARRITO", payload: {nombre,_id,cantidad,precio,descripcion}})
        localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito));
    }
  }, 
  eliminarDelCarrito: ({_id,precio,cantidad})=>{
    return async (dispatch, getState) => {
      dispatch({type:"ELIMINAR_DEL_CARRITO", payload: {_id,precio,cantidad}})
      localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito))
    }
  },
  actualizarCarrito: ({_id},numero)=>{
    return async (dispatch, getState) => {
        dispatch({type:"ACTUALIZAR_CARRITO", payload: {_id,numero}})
        localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito))
    }
  }

}
export default carritoActions;