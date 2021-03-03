const initialState = {
    todosLosProductos:null
  }
  const productoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TODOS_PRODUCTOS':
        return {
          ...state,
          todosLosProductos: action.payload
        }
      default:
        return state;
    }
  }
  export default productoReducer;