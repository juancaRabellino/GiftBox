const initialState = {
  todosLosPaquetes:null
}
const paqueteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_PAQUETES':
      return {
        ...state,
        todosLosPaquetes: action.payload
      }
    default:
      return state;
  }

}
export default paqueteReducer;