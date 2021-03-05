import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import Swal from "sweetalert2"
import "../App.css"
import { BiSearch } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { IoCartOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import PaquetesHeader from './PaquetesHeader'
import { connect } from 'react-redux'
import userActions from "../redux/actions/userActions"


const Header = ({carrito, loggedUser, logOut}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div id="headerContainer">
            <Link to='/'><div style={{ backgroundImage: `url("../assets/giftLogoF-01.png")` }} className='logoContainer'></div></Link>
                <div className="headerInput">
                    <div className="centerCenterRow">
                        <input type="text" placeholder="Busca tu paquete"/>
                        <div className="centerCenterRow searchButton"><BiSearch /></div>                        
                    </div>
                    <div className="paquetesHeader">                    
                        {/* <Link to={'/paquetes'}><button>PAQUETES</button></Link> */}
                        <PaquetesHeader />
                    </div>                 
                </div>
                <div className="headerUser centerVerticalColumn">
                    <div className="abrirRegalo centerCenterRow">
                        <p>Abrir mi Regalo</p>
                    </div>
                    <div className="headerUserBottom spaceBetween">
                        {loggedUser ?
                        <>
                        <Link to="/usuario">
                            <div  className="centerCenterRow userName">
                            <Link to="/" onClick={logOut}>LogOut</Link>
                                <h1>{loggedUser.nombre}</h1>
                                {loggedUser.googleUser==="true" 
                                ? <div className="userImg" style={{backgroundImage: `url(${loggedUser.imagen})`}}></div>
                                : <div className="userImg" style={{backgroundImage: `url("../usuarioImg/${loggedUser.imagen}")`}}></div>
                                }
                            </div>  
                        </Link>
                        </> 
                        :
                        <>
                        <div className="headerUserImg" style={{ backgroundImage: `url("../assets/58670.jpg")` }}/>
                        <Link to="/iniciarsesion">
                            <div className="centerCenterRow userName">
                                <p>Iniciar Sesion</p>
                                <Link className="registrarseHeader" to="/registro">Registrarse</Link>
                            <div className="centerCenterRow"><MdKeyboardArrowDown /></div>
                            </div>
                        </Link> 
                        </>
                        }                             
                        <div className="cartAndHeart">
                            <div className="heart centerCenterRow "><BsHeart /></div>
                            <Link to="/carrito">
                                <div className="cart centerCenterRow ">
                                    <IoCartOutline />
                                <p>{carrito.length}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        carrito:state.carritoReducer.carrito,
        loggedUser: state.userReducer.loggedUser
    }
}

const mapDispatchToProps = {
    logOut: userActions.logOut
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
