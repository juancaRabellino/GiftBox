import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import React , {useEffect} from 'react'

const Paquete = ({match, paquetePorId, obtenerPaquetePorId}) => {
    
    const id = match.params._id
    useEffect(() => {
        obtenerPaquetePorId(id)
    }, [id])

    return (
        <>
        <h2>Productos del Paquete</h2>
        <h1>{paquetePorId && paquetePorId[0].nombre}</h1>
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