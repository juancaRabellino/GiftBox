import React, { useEffect, useState } from 'react'
import { BiWindows } from 'react-icons/bi'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
// import Loader from './Loader'
import TarjetaPaquete from './TarjetaPaquete'

const Paquetes = ({ paquetesFiltrados, filtrarPaquetes, location, todosLosPaquetes }) => {
  const [valor, setValor] = useState(false)
  const [categoria, setCategoria] = useState(true)

  var paquetes = []
  window.scrollTo(0, 0);

  const buscando = e => {
    filtrarPaquetes(e.target.value)
    setValor(true)
  }

  if (!location.categoria && !valor) {
    paquetes = todosLosPaquetes
  } else if (!categoria || valor) {
    paquetes = paquetesFiltrados
  }

  if (categoria && location.categoria) {
    filtrarPaquetes(location.categoria)
    setCategoria(false)
    console.log(categoria)
  }
  console.log(paquetesFiltrados)

  return (
    <main className='packagesMain'>
      <input type='text' onChange={buscando}></input>
      <h3>{(location.categoria && !valor) && location.categoria}</h3>
      <div className='packagesContainer'>
        {paquetes && paquetes.map(paquete => {
          return <TarjetaPaquete paquete={paquete} key={`paquete${paquete._id}`}/>
        })}
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesFiltrados: state.paqueteReducer.paquetesFiltrados
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)