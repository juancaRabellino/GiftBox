import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'


const Paquetes = ({paquetes, verPaquetes}) => {
  
  useEffect(() => {
    verPaquetes()
  }, [])

  return (
    <div>
      <h1>PAQUETES</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    paquetes: state.paqueteReducer.paquetes
  }
}

const mapDispatchToProps = {
  verPaquetes: paqueteActions.verPaquetes
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)