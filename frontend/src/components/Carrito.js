
import { useState } from "react";
import { connect } from "react-redux";
import carritoActions from "../redux/actions/carritoActions";

const Carrito=({carrito,eliminarDelCarrito,actualizarCarrito})=>{
    console.log(carrito)
    return(
        <>
            <h1>Lista del carrito</h1>
            <div>
                {carrito && carrito.map(paquete=>
                <div style={{display:"flex",justifyContent:"space-evenly",border:"solid blue",width:"100vh",height:"10vh"}}>
                    <p>{paquete.nombre}</p> 
                    <button style={{width:"15%"}} value={1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>+</button>
                    <button style={{width:"15%"}} value={-1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>-</button>
                    <button style={{width:"15%"}} onClick={()=>eliminarDelCarrito(paquete._id)}>borrar</button>
                    <p>{paquete.cantidad}</p>
                    <p>${paquete.precio*paquete.cantidad}</p>
                </div>)}
                <p>TOTAL: </p>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        carrito: state.carritoReducer.carrito
    }
}
const mapDispatchToProps={
    actualizarCarrito: carritoActions.actualizarCarrito,
    eliminarDelCarrito: carritoActions.eliminarDelCarrito
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)