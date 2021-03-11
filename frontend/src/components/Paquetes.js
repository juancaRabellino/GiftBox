import React, { useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
// import Loader from './Loader'
import TarjetaPaquete from './TarjetaPaquete'
import { BiSearch } from 'react-icons/bi'
import { useEffect } from 'react'

const Paquetes = ({ todosLosPaquetes,filtrarPaquetes,filtros, location,auxFran, todasLasCategorias }) => {
  const [valor, setValor] = useState(false)
  const [categoria, setCategoria] = useState(true)
  const selects = [document.getElementById('select1'), document.getElementById('select2'), document.getElementById('select3'), document.getElementById('select4')]

  const ciudades = ["Buenos Aires", "Santa Fe", "Córdoba"]
  useEffect(() => {
    console.log(auxFran)
  }, ["",auxFran])
  
  const buscando = (e) => {
    filtros(e.target.name,e.target.value)
    console.log("asd")
    console.log(auxFran)
  }
  return (
    <main className='packagesMain'>
      <input type="text" placeholder="Buscar por nombre" onChange={(e)=>buscando(e)} />
      <div className="filterInput">

        <select id='select1' name="categoria" disabled={true} onChange={buscando}>
          <option value="">Todos las categorías</option>
          {todasLasCategorias && todasLasCategorias.map(categoria => <option value={categoria.nombre}>{categoria.nombre}</option>)}
        </select>

        <select id='select2' name="precio" onChange={buscando}>
          <option className="option" value="">Precios</option>
          <option value="2000">Menos de $2000</option>
          <option value="5000">Menos de $5000</option>
          <option value="10000">Menos de $10000</option>
        </select>

        <select id='select3' name="cantidadPersonas" onChange={buscando}>
          <option value="">Cantidad de personas</option>
          {[...Array(4)].map((m, i) => <option value={i + 1}>{i + 1}</option>)}
        </select>

        <select id='select4' name="ubicacion" onChange={buscando}>
          <option value="">Ubicación</option>
          {ciudades.map(ciudad => <option value={ciudad}>{ciudad}</option>)}
        </select>

        <div className="centerCenterRow searchButton"><BiSearch /></div>
      </div>
      <div className='packagesContainer'>
        {auxFran && auxFran.map(paquete => {
          return <TarjetaPaquete paquete={paquete} key={`paquete${paquete._id}`} />
        })}
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes:state.paqueteReducer.todosLosPaquetes,
    auxFran: state.paqueteReducer.todosLosPaquetes,
    paquetesFiltrados: state.paqueteReducer.paquetesFiltrados,
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes,
  filtros: paqueteActions.filtros
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)