import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import Swal from 'sweetalert2'

const UsuarioMenu = () => {
    return(
        <div className="usuarioMenu"><p>Hola</p></div>
    )

} 
const mapStateToProps = state => {
    return {
        carrito:state.carritoReducer.carrito,
        loggedUser: state.userReducer.loggedUser
    }
}

const mapDispatchToProps = {
    cerrarSesion: userActions.cerrarSesion
  }
export default connect(mapStateToProps, mapDispatchToProps)(UsuarioMenu)