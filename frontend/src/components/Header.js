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

const Header = ({carrito}) => {
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
                        <div className="headerUserImg" style={{ backgroundImage: `url("../assets/58670.jpg")` }}></div>
                        <Link to='/usuario'className="centerCenterRow userName">
                            <div >
                                <p>User Name</p>
                                <div className="centerCenterRow">
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                        </Link>
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
        carrito:state.carritoReducer.carrito
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
