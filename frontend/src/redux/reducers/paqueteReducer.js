const initialState = {
  paquetes: []
}
const paqueteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_PAQUETES':
      return {
        ...state,
        paquetes: action.payload
      }
    default:
      return state;
  }

}
export default paqueteReducer;