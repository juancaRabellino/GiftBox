import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import {Link} from "react-router-dom"
import productoActions from "../redux/actions/productoActions"



const Paquetes = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes,productosDelpaquete,
   obtenerPaquetesPorCategoria,obtenerTodoslosProductos,todosLosProductos,obtenerProductosPorPaquete }) => {
  
  const [mostrarProductos,setMostrarProductos]=useState(true)

  useEffect(() => {
    if (!todosLosPaquetes) {
      obtenerTodosLosPaquetes()
      obtenerTodoslosProductos()
    }
  }, [])

  // COMO USAR CARGANDO PARA MOSTRAR PRELOADER
  if (!todosLosPaquetes || !todosLosProductos ) { return <Loader /> }
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
      <button onMouseEnter={() => obtenerPaquetesPorCategoria('viajar')}>VIAJAR</button>
      <button onMouseEnter={() => obtenerPaquetesPorCategoria('comer')}>COMER</button>
      
      <div onMouseOver={()=>setMostrarProductos(true)} onMouseOut={()=>setMostrarProductos(false)} style={{border: "solid red"}}>
        {paquetesPorCategoria.map(paquete=>
        <Link to={`/paquete/${paquete._id}`} key={`Link${paquete._id}`}>
          <p onMouseOver={()=>obtenerProductosPorPaquete(paquete._id)}>
              {paquete.nombre}
          </p>
          </Link> )
        } 
      </div>
      {mostrarProductos && productosDelpaquete.map(producto=><p key={producto._id}>{producto.nombre}</p>)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesPorCategoria: state.paqueteReducer.paquetesPorCategoria,
    todosLosProductos: state.productoReducer.todosLosProductos,
    productosDelpaquete: state.productoReducer.productosDelpaquete
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  obtenerPaquetesPorCategoria: paqueteActions.obtenerPaquetesPorCategoria,
  obtenerTodoslosProductos: productoActions.obtenerTodoslosProductos,
  obtenerProductosPorPaquete: productoActions.obtenerProductosPorPaquete
}

export default connect(mapStateToProps,mapDispatchToProps)(Paquetes)