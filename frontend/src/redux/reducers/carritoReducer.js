const initialState={
    carrito:[]
}
const carritoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ("AGREGAR_AL_CARRITO"):
            let paqueteEnCarrito=false;
            const carritoAux= state.carrito.map(paquete=>{
                if(paquete._id===action.payload._id){
                    paquete.cantidad+=1;
                    paqueteEnCarrito=true;
                }
                return paquete
            })
            if(paqueteEnCarrito){
                return {
                    ...state,
                    carrito:carritoAux
                }
            }
            return {
                ...state,
                carrito:[...state.carrito,{...action.payload,cantidad:1}]
            }
        case ("ELIMINAR_DEL_CARRITO"):
            return{
                ...state,
                carrito: state.carrito.filter(paquete=>paquete._id!==action.payload)
            }
        case ("ACTUALIZAR_CARRITO"):
            console.log(action.payload)
            const carritoAux2=state.carrito.filter(paquete=>{
                if(paquete._id===action.payload._id){
                    paquete.cantidad+=parseInt(action.payload.numero)
                }
                if(paquete.cantidad!==0){return paquete;}
            })
            return{
                ...state,
                carrito: carritoAux2
            }
        default:
            return state;
    }

}
export default carritoReducer;