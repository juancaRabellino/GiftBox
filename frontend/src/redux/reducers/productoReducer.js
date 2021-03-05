const initialState = {
    todosLosProductos:null,
    productosDelpaquete:[]
  }
  const productoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TODOS_PRODUCTOS':
        return {
          ...state,
          todosLosProductos: action.payload
        }
      case 'PRODUCTOS_DEL_PAQUETE':
        return {
          ...state,
          productosDelpaquete: state.todosLosProductos.filter(producto => producto.paqueteId/* ._id */ === action.payload)
        }
      default:
        return state;
    }
  }
  export default productoReducer;