const initialState = {
  todosLosPaquetes: null,
  paquetesPorCategoria: [],
  paquetePorId: null,
  paquetesFiltrados: []
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
    case 'FILTRO':
      return {
        ...state,
        paquetesFiltrados: state.todosLosPaquetes.filter(paquete => paquete.nombre.toLowerCase().includes(action.payload.toLowerCase().trim()) || paquete.cantidadPersonas === action.payload.trim() || paquete.ubicacion.toLowerCase().includes(action.payload.toLowerCase().trim()) || paquete.categoria.toLowerCase().includes(action.payload.toLowerCase().trim()))
      }
    default:
      return state;
  }

}
export default paqueteReducer;