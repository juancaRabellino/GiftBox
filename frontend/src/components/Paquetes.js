import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import Loader from './Loader'
import { Link } from "react-router-dom"
import { BsFillStarFill } from 'react-icons/bs'

const Paquetes = ({ paquetesFiltrados, todosLosPaquetes, filtrarPaquetes }) => {

  const [valor, setValor] = useState(false)

  const paquetes = valor ? paquetesFiltrados : todosLosPaquetes
  const buscando = e => {
    filtrarPaquetes(e.target.value)
    setValor(true)
  }

  if (!todosLosPaquetes) return <Loader />
  console.log(paquetesFiltrados)
  return (
    <main className='packagesMain'>
      <input type='text' onChange={buscando}></input>
      <div className='packagesContainer'>
        {paquetes.map(paquete => {
          return (
            <div className='package' key={`paq${paquete._id}`}>
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
                  <div className='starsAndAssessment'>
                    <p>{paquete.valoracion.length}</p>
                    {[...Array(5)].map((m, i) => {
                      const ratingValue = i + 1
                      return (
                        <label>
                          <BsFillStarFill className="star" color='#ffc107' />
                        </label>
                      )
                    })}
                  </div>
                  <div className='packageDescription'>
                    <p>{paquete.descripcion}</p>
                  </div>
                  <p className='price'>${paquete.precio}</p>
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
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesFiltrados: state.paqueteReducer.paquetesFiltrados
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)