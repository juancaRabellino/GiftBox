const initialState = {
  todosLosPaquetes: null,
  paquetesPorCategoria: [],
  paquetePorId: null,
  paquetesFiltrados: [],
  paquetesMasRegalados: []
}
const actualizarPaquete=(paquetesViejo,paqueteNuevo)=>{
  return (
    paquetesViejo.map(paquete=>{
      if(paquete._id===paqueteNuevo._id){paquete.valoracion=paqueteNuevo.valoracion;}
      return paquete
  }
  ))
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
      var paqueteAux= state.todosLosPaquetes.find(paquete => paquete._id === action.payload)
      var suma=0;
      (paqueteAux.valoracion).map(valoracion=>(suma+=valoracion.valor))
      var promedio= suma/(paqueteAux.valoracion).length;
      // console.log("suma: "+suma +"/" +(paqueteAux.valoracion).length )
      // console.log("promedio " + promedio)
      return {
        ...state,
        paquetePorId: {...paqueteAux,promedio}
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
    case 'ENVIAR_VALORACION':
      return{
        ...state,
        paquetePorId:{...state.paquetePorId,valoracion:action.payload.valoracion}
      }
    default:
      return state;
  }

}
export default paqueteReducer;