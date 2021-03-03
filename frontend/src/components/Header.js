import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from "react-redux"
import usersActions from "../redux/actions/userActions"
import paqueteActions from '../redux/actions/paqueteActions'
import productoActions from '../redux/actions/productoActions'
import Loader from './Loader'
import Hamburger from 'hamburger-react'
import Swal from "sweetalert2"
import "../App.css"
import { BiSearch } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { IoCartOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import PaquetesHeader from './PaquetesHeader'

const Header = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes, productosDelpaquete,
  obtenerPaquetesPorCategoria, obtenerTodoslosProductos, todosLosProductos, obtenerProductosPorPaquete }) => {
    const [isOpen, setOpen] = useState(false)
    const [mostrarProductos, setMostrarProductos] = useState(true)
  
  useEffect(() => {
    if (!todosLosPaquetes) {
      obtenerTodosLosPaquetes()
      obtenerTodoslosProductos()
    }
  }, [])

  if (!todosLosPaquetes || !todosLosProductos) { return <Loader /> }

    return (
        <>
            <div id="headerContainer">
                <div style={{ backgroundImage: `url("../assets/giftLogoF-01.png")` }} className='logoContainer'></div>
                <div className="headerInput">
                    <Link to={'/paquetes'}><button>PAQUETES</button></Link>
                    <input type="text" placeholder="Busca tu paquete"/>
                    <div className="centerCenterRow searchButton"><BiSearch /></div>
                    <PaquetesHeader />
                </div>
                <div className="headerUser centerVerticalColumn">
                    <div className="abrirRegalo centerCenterRow">
                        <p>Abrir mi Regalo</p>
                    </div>
                    <div className="headerUserBottom spaceBetween">
                        <div className="headerUserImg" style={{ backgroundImage: `url("../assets/58670.jpg")` }}></div>
                        <div className="centerCenterRow userName">
                            <p>User Name</p>
                            <div className="centerCenterRow"><MdKeyboardArrowDown /></div>
                        </div>
                        <div className="cartAndHeart">
                            <div className="heart centerCenterRow "><BsHeart /></div>
                            <div className="cart centerCenterRow "><IoCartOutline /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesPorCategoria: state.paqueteReducer.paquetesPorCategoria,
    todosLosProductos: state.productoReducer.todosLosProductos,
    productosDelpaquete: state.productoReducer.productosDelpaquete
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  obtenerPaquetesPorCategoria: paqueteActions.obtenerPaquetesPorCategoria,
  obtenerTodoslosProductos: productoActions.obtenerTodoslosProductos,
  obtenerProductosPorPaquete: productoActions.obtenerProductosPorPaquete
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)