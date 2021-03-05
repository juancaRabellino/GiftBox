
import { BsFillPeopleFill} from "react-icons/bs";
import { connect } from "react-redux";

const Carrito=({carrito})=>{
    if(!carrito){return <h1>loading..</h1> }
    console.log(carrito)
    return(
        <>
        <div className="carrito">
            <div className="carritoHead">
                <h2> Tu carrito</h2>
            </div>
            <div className="carritoSection">
                <div className="carritoPaquetes">
                    {carrito && carrito.map(paquete=>
                        <div className="carritoPaquete">
                            <div className="carritoPaqueteNombre">
                                {paquete.nombre}
                                <p>borrar</p>
                            </div>
                            <div className="carritoPaqueteContenido">
                                <div id="carritoImagen">
                                    <div className="carritoImagen" style={{backgroundImage: `url(${paquete.imagen})`}}></div>
                                </div>
                                <div id="carritoDescripcion"><p> <BsFillPeopleFill/> Para {paquete.cantidadPersonas} personas o mas</p></div>
                                <div id="carritoCantidad">3</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="carritoResumen"></div>
            </div>
        </div>
            {/* <h1>Lista del carrito</h1>
            <div>
                {carrito  && carrito.map(paquete=>
                <div style={{display:"flex",justifyContent:"space-evenly",border:"solid blue",width:"100vh",height:"10vh"}}>
                    <p>{paquete.nombre}</p> 
                    <button style={{width:"15%"}} value={1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>+</button>
                    <button style={{width:"15%"}} value={-1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>-</button>
                    <button style={{width:"15%"}} onClick={()=>eliminarDelCarrito(paquete)}>borrar</button>
                    <p>{paquete.cantidad}</p>
                    <p>${paquete.precio*paquete.cantidad}</p>
                </div>)}
                <p>TOTAL: {total}</p>
            </div> */}
        </>
    )
}
const mapStateToProps = state => {
    return {
        carrito: state.carritoReducer.carrito
    }
}


export default connect(mapStateToProps, null)(Carrito)