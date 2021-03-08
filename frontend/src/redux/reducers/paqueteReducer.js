const initialState = {
  todosLosPaquetes: null,
  paquetesPorCategoria: [],
  paquetePorId: null,
  paquetesFiltrados: [],
  paquetesMasRegalados: []
}
const paqueteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_PAQUETES':
      console.log(action.payload)
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
    case 'PAQUETES_MAS_REF':
      return {
        ...state,
        paquetesMasRegalados: action.payload
      }
    default:
      return state;
  }

}
export default paqueteReducer;