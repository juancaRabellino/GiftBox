
import { BsDash, BsFillPeopleFill, BsPlus, BsTrash} from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const Envio=({carrito,total})=>{
    const [tipoEnvio,setTipoEnvio]=useState("")
    const [paraQuien,setParaQuien]=useState("")
    const [mailDestinatario, setMailDestinatario]= useState("");
    const [errores,setErrores]=useState([]);
    const continuar=()=>{
        let lastAtPos = mailDestinatario.lastIndexOf('@');
        let lastDotPos = mailDestinatario.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && mailDestinatario.indexOf('@@') == -1 && lastDotPos > 2 && (mailDestinatario.length - lastDotPos) > 2)) {
            setErrores(["Email no valido"])
        }
        else{ 
            setErrores([])
        }
    }
    if(!carrito){return <h1>loading..</h1> }
    console.log(mailDestinatario)
    return(
        <>
        <div className="carrito">
            <div className="carritoHead"  style={{ backgroundImage: `url("../assets/carritoImagen.png")` }} >
                <Link to="/carrito">
                    <BiArrowBack style={{fontSize: "3rem", color:"#464646"}}/>
                </Link>
                <div id="progresoCompra">
                    <ProgressBar completed={5} labelAlignment="outside" bgcolor="#2e93e5"/>
                    <div style={{display:"flex",justifyContent:"space-between",paddingTop:"1vh",paddingRight:"2vw"}}>
                        <p>Envio</p>
                        <p>Mensaje</p>
                        <p>Pago</p>
                        <p>Resumen</p>
                    </div>
                </div>
                
            </div>
            <div className="carritoSection">
            {carrito.length!==0
            &&
                <div className="carritoPaquetes">
                    {carrito && carrito.map(paquete=>
                        <div className="carritoPaquete" key={`carPac${paquete._id}`}>
                            <div className="carritoPaqueteNombre" style={{ backgroundImage: `url("../assets/bannerCarrito.jpg")` }} >
                                {paquete.nombre}
                               
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
                                    
                                </div>
                            </div>
                        </div>
                    )}
                <div style={{width:"100%",textAlign:"center", backgroundColor:"#fff"}}>   
                    <h4 style={{padding:"3vh",fontSize:"1.2rem"}}>Elegí un método de envío</h4>
                    <div id="metodoDeEnvio">
                        <div className="metodoDeEnvio1">
                            <div className="tipoEnvio" onClick={()=>setTipoEnvio("mail")}>
                                <AiOutlineMail/> 
                                <p style={{paddingLeft:"1vw"}}>Envio por Email</p>
                            </div> 
                        </div>
                        <div className="metodoDeEnvio1">
                            <div className="tipoEnvio" onClick={()=>setTipoEnvio("whatsapp")}>
                                <SiWhatsapp/>
                                <p style={{paddingLeft:"1vw"}}>Envio por Whatsapp</p>
                            </div>
                        </div>
                        <div className="metodoDeEnvio1">
                            <div className="tipoEnvio">Envio físico por correo</div>
                        </div>
                        <div className="metodoDeEnvio1">
                            <div className="tipoEnvio">Retiro por tienda física de GiftBox</div>
                        </div>
                    </div>
                </div>
                
                {tipoEnvio==="mail" &&
                <>
                    <div>
                        <h4 style={{padding:"3vh",fontSize:"1.2rem"}}>¿A quién se lo enviás?</h4>
                    </div>
                    <div id="inputsEnvio">
                        <label htmlFor="regaloInput" style={{ display:"flex",alignItems:"center"}}>
                            <input type='radio' id="regaloInput" value='regalo' name='paraQuien' onChange={()=>setParaQuien("regalo")}/>
                            <span style={{paddingLeft:"1vw"}}>Es para regalar</span>
                        </label>
                        <label  htmlFor="paraMi" style={{ display:"flex",alignItems:"center" }} onChange={()=>setParaQuien("paraMi")}>
                            <input type='radio' id="paraMi" value='paraMi' name='paraQuien'/>
                            <span style={{paddingLeft:"1vw"}}>Es para mí</span>
                        </label>  
                    </div>
                {paraQuien==="regalo" &&
                    <div style={{display:"flex",flexDirection:"column",width:"100%" , height:"25vh", border:"black"}}>
                        <input type="email" className="tipoEnvio" placeholder=" E-mail del destinatario*" 
                        style={{height:"8vh",marginTop:"2vh",cursor:"text"}} onChange={(e)=>setMailDestinatario(e.target.value)}/>
                        <input type="text" className="tipoEnvio" placeholder=" Asunto del E-mail (opcional)" 
                        style={{height:"8vh",marginTop:"2vh",cursor:"text"}}/>
                        {errores.length>0 && errores.map((error, i)=><p style={{paddingTop:"1vh"}} key={`error${i}`}>-{error}</p> )}
                    </div>  
                }              
                </>
                }  
                <div  style={{width:"100%", paddingTop:"2vh"}}>
                    <Link id="carritoContinuar" style={{margin:"0"}} onClick={continuar}>
                        {paraQuien==="paraMi" ?<Link to="/envioMensaje"> Continuar al pago</Link> : <Link to="/envioMensaje"> Continuar al mensaje</Link>}
                    </Link>
                </div>

            </div>
            
            }
                <div className="carritoResumen">
                    <div>
                        <div id="resumenTitulo">
                            <h4>Resumen de compra</h4>
                        </div>
                        {carrito.map(paquete=>
                            <div id="resumenPaquetes" key={`resPac${paquete._id}`}>
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
                        <div id="resumenContinuarYseguir">
                            <Link id="carritoSeguirComprando">Seguir Comprando</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        carrito: state.carritoReducer.carrito,
        total:state.carritoReducer.total
    }
}


export default connect(mapStateToProps, null)(Envio)