import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import { Link } from "react-router-dom"
import productoActions from "../redux/actions/productoActions"

const Paquetes = ({ paquetesFiltrados, filtrarPaquetes }) => {

  const [valor, setValor] = useState(false)
  
  useEffect(() => {
    
  }, [])
  // COMO USAR CARGANDO PARA MOSTRAR PRELOADER
  if (!todosLosPaquetes || !todosLosProductos ) { return <Loader /> }

  const buscando = e => {
    filtrarPaquetes(e.target.value)
    setValor(true)
  }
  



  return (
    <>
      <input type='text' onChange={buscando}></input>
    </>
  )
  
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)