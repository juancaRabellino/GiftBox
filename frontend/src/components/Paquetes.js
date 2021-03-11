import React, { useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
// import Loader from './Loader'
import TarjetaPaquete from './TarjetaPaquete'
import { BiSearch } from 'react-icons/bi'

const Paquetes = ({ paquetesFiltrados, filtrarPaquetes, location, todosLosPaquetes }) => {
  const [valor, setValor] = useState(false)
  const [categoria, setCategoria] = useState(true)
  // const [paquetes, setPaquetes] = useState([])


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
  }

  return (
    <main className='packagesMain'>
      <div className="filterInput">
        <input type="text" placeholder="Busca tu paquete" onChange={buscando}/>
        <div className="centerCenterRow searchButton"><BiSearch /></div>
      </div>
      <h3>{(location.categoria && !valor) && location.categoria}</h3>
      <div className='packagesContainer'>
        {paquetes && paquetes.map(paquete => {
          return <TarjetaPaquete paquete={paquete} key={`paquete${paquete._id}`} />
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