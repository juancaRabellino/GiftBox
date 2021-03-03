const initialState = {
  todosLosPaquetes: null,
  paquetesPorCategoria: [],
  paquetePorId: null
}
const paqueteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_PAQUETES':
      return {
        ...state,
        todosLosPaquetes: action.payload
      }
    case 'PAQUETES_CATEGORIA':
      return {
        ...state,
        paquetesPorCategoria: state.todosLosPaquetes.filter(paquete => paquete.categoria === action.payload)
      }
    case 'PAQUETE_ID':
      return {
        ...state,
        paquetePorId: state.todosLosPaquetes.filter(paquete => paquete._id === action.payload)
      }
    default:
      return state;
  }

}
export default paqueteReducer;