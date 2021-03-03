import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'

const Paquetes = ({todosLosPaquetes, obtenerTodosLosPaquetes}) => {
  useEffect(() => {
    if (!todosLosPaquetes){obtenerTodosLosPaquetes()}
  }, [])

  if(!todosLosPaquetes){return <h2>Cargando paquetes...</h2> }
  
  return (
    <div>
      <h1>PAQUETES</h1>
      {todosLosPaquetes.map(paquete=><h5>{paquete.nombre}</h5>)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)