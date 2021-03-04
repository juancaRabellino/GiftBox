import axios from 'axios'

const carritoActions = {
  agregarAlCarrito: ({nombre,_id,cantidad,precio,descripcion}) => {
    return async (dispatch, getState) => {
        dispatch({type:"AGREGAR_AL_CARRITO", payload: {nombre,_id,cantidad,precio,descripcion}})
        localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito));
    }
  }, 
  eliminarDelCarrito: (_id)=>{
    return async (dispatch, getState) => {
      dispatch({type:"ELIMINAR_DEL_CARRITO", payload: _id})
      localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito))
    }
  },
  actualizarCarrito: ({_id},numero)=>{
      console.log("entre")
    return async (dispatch, getState) => {
        dispatch({type:"ACTUALIZAR_CARRITO", payload: {_id,numero}})
        localStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito))
    }
  }

}
export default carritoActions;