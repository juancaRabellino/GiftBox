import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import {Link} from "react-router-dom"

const Paquetes = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes, obtenerPaquetesPorCategoria }) => {

  useEffect(() => {
    if (!todosLosPaquetes) {
      obtenerTodosLosPaquetes()
    }
  }, [])

  // COMO USAR CARGANDO PARA MOSTRAR PRELOADER
  if (!todosLosPaquetes) { return <Loader /> }

  console.log(paquetesPorCategoria)
  return (
    <div className='contenedorPaquetes'>
      <h1>PAQUETES</h1>
      {todosLosPaquetes.map(({ nombre, precio, cantidadPersonas, categoria, descripcion, opiniones, productos, ubicacion, valoracion, _id }) => {
        return (
          <div className='paquete' key={_id}>
            <h5>{nombre}</h5>
          </div>
        )
      })}
      <button onClick={() => obtenerPaquetesPorCategoria('viajar')}>VIAJAR</button>
      <button onClick={() => obtenerPaquetesPorCategoria('comer')}>COMER</button>
        {paquetesPorCategoria.map(paquete=><Link to={`/paquete/${paquete._id}`}><p>{paquete.nombre}</p></Link> )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesPorCategoria: state.paqueteReducer.paquetesPorCategoria
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  obtenerPaquetesPorCategoria: paqueteActions.obtenerPaquetesPorCategoria
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)