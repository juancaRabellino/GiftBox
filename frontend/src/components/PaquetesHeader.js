import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import { Link } from "react-router-dom"
import productoActions from "../redux/actions/productoActions"
import categoriaActions from '../redux/actions/categoriaActions'

const PaquetesHeader = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes, productosDelpaquete,
  obtenerPaquetesPorCategoria, obtenerTodoslosProductos, todosLosProductos, obtenerProductosPorPaquete, todasLasCategorias, obtenerTodasLasCategorias }) => {

  const [mostrarProductos, setMostrarProductos] = useState(true)

  useEffect(() => {
    if (!todosLosPaquetes) {
      obtenerTodosLosPaquetes()
      obtenerTodoslosProductos()
      obtenerTodasLasCategorias()
    }
  }, [])

  // COMO USAR CARGANDO PARA MOSTRAR PRELOADER
  if (!todosLosPaquetes || !todosLosProductos) { return <Loader /> }

  return (
    <div className='contenedorPaquetes'>

      <h1>PAQUETES</h1>

      {todasLasCategorias && todasLasCategorias.map(categoria => {
        return (
          <button onMouseEnter={() => obtenerPaquetesPorCategoria(categoria.nombre)} key={`btnCat${categoria._id}`}>{categoria.nombre}</button>
        )
      })}

      <div onMouseOver={() => setMostrarProductos(true)} onMouseOut={() => setMostrarProductos(false)} style={{ border: "solid red" }}>
        {paquetesPorCategoria.map(paquete =>
          <Link to={`/paquete/${paquete._id}`} key={`Link${paquete._id}`}>
            <p onMouseOver={() => obtenerProductosPorPaquete(paquete._id)}>
              {paquete.nombre}
            </p>
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesPorCategoria: state.paqueteReducer.paquetesPorCategoria,
    todosLosProductos: state.productoReducer.todosLosProductos,
    productosDelpaquete: state.productoReducer.productosDelpaquete,
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  obtenerPaquetesPorCategoria: paqueteActions.obtenerPaquetesPorCategoria,
  obtenerTodoslosProductos: productoActions.obtenerTodoslosProductos,
  obtenerProductosPorPaquete: productoActions.obtenerProductosPorPaquete,
  obtenerTodasLasCategorias: categoriaActions.obtenerTodasLasCategorias
}

export default connect(mapStateToProps, mapDispatchToProps)(PaquetesHeader)