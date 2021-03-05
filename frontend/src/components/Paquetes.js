import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import { Link } from "react-router-dom"
import productoActions from "../redux/actions/productoActions"
import { BsFillStarFill } from 'react-icons/bs'

const Paquetes = ({ paquetesFiltrados, filtrarPaquetes, location }) => {

  const [valor, setValor] = useState(false)
  const [categoria, setCategoria] = useState(true)

  useEffect(() => {
    
  }, [])
  // COMO USAR CARGANDO PARA MOSTRAR PRELOADER
  

  const buscando = e => {
    filtrarPaquetes(e.target.value)
    setValor(true)
  }

  console.log(location.categoria)
  if(categoria && location.categoria){
    filtrarPaquetes(location.categoria)
    setCategoria(false)
    console.log(categoria)
  }
  console.log(valor)
  // location.categoria && filtrarPaquetes(location.categoria)


  return (
    <main className='packagesMain'>
      <input type='text' onChange={buscando}></input>
      <h3>{(location.categoria && !valor) && location.categoria}</h3>
      <div className='packagesContainer'>
        {paquetesFiltrados && paquetesFiltrados.map(paquete => {
          return (

            <div className='package'>
              <div className='packageImage' style={{}}>
                <div className='packageCategoryContainer'>
                  <div className='categoryContainer'>
                    <p>{paquete.categoria}</p>
                  </div>
                  <div className='giftBoxImage'>
                  </div>
                </div>
              </div>
              <div className='packageDataContainer'>
                <div className='packageData'>
                  <div style={{ margin: '15px 0 0 10px' }}>{[...Array(5)].map((m, i) => {
                    const ratingValue = i + 1
                    return (
                      <label>
                        <BsFillStarFill className="star" color='#ffc107' />
                      </label>
                    )
                  })}</div>
                  <p>DESCRIPCION</p>
                  <p className='precio'>${paquete.precio}</p>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    paquetesFiltrados: state.paqueteReducer.paquetesFiltrados
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)