import '../styles/paquete.css'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeft, BsFillPersonFill,BsBuilding, BsGiftFill,BsIntersect } from "react-icons/bs";


const Paquete = ({ match, paquetePorId, obtenerPaquetePorId }) => {
    const [paquete, setPaquete] = useState([])

    const id = match.params._id
    useEffect(() => {
        obtenerPaquetePorId(id)
        paquetePorId && setPaquete(paquetePorId)
    }, [id])
    console.log(paquete)
    return (
        <>
            {paquetePorId &&
            <>
                <div className="paqueteBanner"><Link to="/" style={{display: 'flex', alignItems: 'center'}}><BsArrowLeft className="paqueteIcono"/>Regresar a la página principal</Link></div>
                <div className="paqueteContainer">
                    <h2 className="tituloPaquete">{paquetePorId[0].nombre}</h2>
                    <p className="descripcionPaquete">{paquetePorId[0].descripcion}</p>
                    <div className="paqueteImgInfo">
                        <div className="paqueteImg">
                            <img src={paquetePorId[0].imagen} alt="paqueteImg" className="paqueteImgDin"/>
                        </div>
                        <div className="paqueteInfo">
                            <h4>Acerca de esta GiftBox</h4>
                            <div className="cantidadDePersonas"><BsFillPersonFill/>Para {paquetePorId[0].cantidadPersonas} persona/s</div>
                            <div className="categoria"><BsIntersect/>Categoria: {paquetePorId[0].categoria}</div>
                            <div className="ubicacion"><BsBuilding/>Ubicacion: {paquetePorId[0].ubicacion}</div>
                            <div className="vendidos"><BsGiftFill/>Cantidad de paquetes vendidos: {paquetePorId[0].cantidadVendidos.length}</div>
                            <div className="linea"></div>
                            <div className="formatodeRegalo">
                                <h5>Formatos de Regalo</h5>
                                <p>Regalo digital</p>
                                <p>Envío por email</p>
                            </div>
                            <div className="linea"></div>
                            <div className="precio">${paquetePorId[0].precio} <p>ver cuotas</p></div>
                        </div>
                    </div>
                </div>
            </>    
            }
        </>
    )

}

const mapStateToProps = state => {
    return {
        todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
        paquetePorId: state.paqueteReducer.paquetePorId
    }
}

const mapDispatchToProps = {
    obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
    obtenerPaquetePorId: paqueteActions.obtenerPaquetePorId
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquete)