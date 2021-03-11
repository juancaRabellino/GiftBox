import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
// import Loader from './Loader'
import TarjetaPaquete from './TarjetaPaquete'
import { BiSearch } from 'react-icons/bi'
import { useEffect } from 'react'
import productoActions from '../redux/actions/productoActions'

const Paquetes = ({todosLosPaquetes, todasLasCategorias }) => {
  const ciudades = ["Buenos Aires", "Santa Fe", "Córdoba"]
  const [paquetesFiltrados,setPaquetesFiltrados]=useState(todosLosPaquetes)
  const [filtroActivado,setFiltroActivado]=useState(false)
  
  const leerInputs=(e)=>{
    console.log("Filtro por "+e.target.name+": "+e.target.value)
    let aux=[]
    if(!filtroActivado){
      {(e.target.name==="precio" && e.target.value!=="") 
      ? aux=todosLosPaquetes.filter(paquete=>paquete.precio<=e.target.value)
      : (e.target.name==="cantidadPersonas" && e.target.value!=="") 
      ? aux=todosLosPaquetes.filter(paquete=>paquete.cantidadPersonas==e.target.value) 
      : (e.target.name==="ubicacion" && e.target.value!=="")
      ? aux=todosLosPaquetes.filter(paquete=>paquete.ubicacion==e.target.value)
      : aux=todosLosPaquetes}
    }else {
      aux=todosLosPaquetes
    }
    
    setPaquetesFiltrados(aux)
  }
  console.log(filtroActivado)
  console.log(paquetesFiltrados)
  return (
    <main className='packagesMain'>
      <input type="text" placeholder="Buscar por nombre" />
      <div className="filterInput">

        <select id='select1' name="categoria" disabled={true} >
          <option value="">Todos las categorías</option>
          {todasLasCategorias && todasLasCategorias.map(categoria => <option value={categoria.nombre}>{categoria.nombre}</option>)}
        </select>

        <select id='select2' name="precio" onChange={leerInputs}>
          <option className="option" value="">Precios</option>
          <option  value="2000">Menos de $2000</option>
          <option  value="5000">Menos de $5000</option>
          <option  value="10000">Menos de $10000</option>
        </select>

        <select id='select3' name="cantidadPersonas" onChange={leerInputs} >
          <option value="">Cantidad de personas</option>
          {[...Array(4)].map((m, i) => <option value={i + 1}>{i + 1}</option>)}
        </select>

        <select id='select4' name="ubicacion" onChange={leerInputs}>
          <option value="">Ubicación</option>
          {ciudades.map(ciudad => <option value={ciudad}>{ciudad}</option>)}
        </select>

        <div className="centerCenterRow searchButton"><BiSearch /></div>
      </div>
      <div className='packagesContainer'>
        {paquetesFiltrados && paquetesFiltrados.map(paquete => {
          return <TarjetaPaquete paquete={paquete} key={`paquete${paquete._id}`} />
        })}
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes:state.paqueteReducer.todosLosPaquetes,
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)