
import { BsDash, BsFillPeopleFill, BsPlus, BsTrash} from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import carritoActions from "../redux/actions/carritoActions";

const Carrito=({carrito,eliminarDelCarrito,actualizarCarrito,total})=>{
    if(!carrito){return <h1>loading..</h1> }
    return(
        <>
        <div className="carrito">
            <div className="carritoHead"  style={{ backgroundImage: `url("../assets/carritoImagen.png")` }} >
                <BiArrowBack style={{fontSize: "3rem", color:"#464646"}}/><h3 style={{fontSize:"2.2rem", color:"#464646",paddingLeft:"2vw"}}>Tu carrito</h3>
            </div>
            <div className="carritoSection">
                <div className="carritoPaquetes">
                    {carrito && carrito.map(paquete=>
                        <div className="carritoPaquete">
                            <div className="carritoPaqueteNombre" style={{ backgroundImage: `url("../assets/bannerCarrito.jpg")` }} >
                                {paquete.nombre}
                                <BsTrash onClick={()=>eliminarDelCarrito(paquete)} style={{cursor:"pointer"}}/>
                            </div>
                            <div className="carritoPaqueteContenido">
                                <div id="carritoImagen">
                                    <div className="carritoImagen" style={{backgroundImage: `url(${paquete.imagen})`}}></div>
                                </div>
                                <div id="carritoDescripcion">
                                    <div>
                                        <h4 style={{textShadow:"2px"}}> <BsFillPeopleFill/> Para {paquete.cantidadPersonas} personas o mas</h4>
                                        <p>Stock: {paquete.stock}</p>
                                    </div>
                                    <div>
                                        <h3>${paquete.precio}</h3>
                                    </div>
                                </div>
                                <div id="carritoCantidad">
                                    <div id="carritoCantidad1" >
                                        {paquete.cantidad===1 
                                        ? <button style={{cursor:"not-allowed",backgroundColor:"rgb(169 161 161 / 58%)"}} className="buttonCarrito"><BsDash/></button>
                                        : <button value={-1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)} className="buttonCarrito"><BsDash/></button>}
                                        <div ><h5 >x{paquete.cantidad}</h5></div>
                                        {paquete.stock===0
                                        ?<button style={{cursor:"not-allowed",backgroundColor:"#eaeaea"}}  className="buttonCarrito"><BsPlus/></button>
                                        :<button value={1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)} className="buttonCarrito"><BsPlus/></button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="carritoResumen">
                    <div>
                        <div id="resumenTitulo">
                            <h4>Resumen de compra</h4>
                        </div>
                        {carrito.map(paquete=>
                            <div id="resumenPaquetes">
                                <div>
                                    <p>{paquete.nombre} x{paquete.cantidad}</p>
                                </div>
                                <p> $ {paquete.precio*paquete.cantidad} </p>
                            </div>
                        )}
                        <div id="resumenTotal" >
                            <p>Total</p>  
                            <p>$ {total}</p>
                        </div>
                    </div>
                </div>
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
        carrito: state.carritoReducer.carrito,
        total:state.carritoReducer.total
    }
}
const mapDispatchToProps = {
    agregarAlCarrito: carritoActions.agregarAlCarrito,
    eliminarDelCarrito: carritoActions.eliminarDelCarrito,
    actualizarCarrito: carritoActions.actualizarCarrito
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito)