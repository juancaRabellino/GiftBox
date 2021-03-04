import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import React, { useEffect } from 'react'

const Paquete = ({ match, paquetePorId, obtenerPaquetePorId }) => {

    const id = match.params._id
    useEffect(() => {
        obtenerPaquetePorId(id)
    }, [])
    console.log(paquetePorId)
    return (
        <>
            {paquetePorId &&
                <div className="packageContainer">
                    <h1 className="packageTitle">{paquetePorId[0].nombre}</h1>
                    <h2 className="packageDesc">{paquetePorId[0].descripcion}</h2>
                </div>
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