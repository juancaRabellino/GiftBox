import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";

const Paquete = ({ match, paquetePorId, obtenerPaquetePorId }) => {
    const [paquete, setPaquete] = useState([])

    const id = match.params._id
    useEffect(() => {
        obtenerPaquetePorId(id)
        paquetePorId && setPaquete(paquetePorId)
    }, [id])

    return (
        <>
            {paquetePorId &&
            <>
                <div className="packageBanner"><Link to="/" style={{display: 'flex', alignItems: 'center'}}><BsArrowLeft className="packageArrow"/>Regresar a la página principal</Link></div>
                <div className="packageContainer">
                    <h2 className="packageTitle">{paquetePorId[0].nombre}</h2>
                    <p className="packageDesc">{paquetePorId[0].descripcion}</p>
                    <div className="packageImgInfo">
                        <div className="packageImg"></div>
                        <div className="packageInfo">
                            <h4>Acerca de esta GiftBox</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.2 19.2"></svg>
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