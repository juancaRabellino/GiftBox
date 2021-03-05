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


const Header = ({carrito, loggedUser}) => {
    const [isOpen, setOpen] = useState(false)
    console.log(loggedUser)
   if (loggedUser) {

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
                        <Link to="/usuario">
                            <div className="centerCenterRow userName">
                                <p>User Name</p>
                                <div className="centerCenterRow"><MdKeyboardArrowDown /></div>
                            </div>
                        </Link> 
                     
                         <div>
                             <h1>{loggedUser.nombre}</h1>
                         <img className="profile" src = {loggedUser.imagen}/>
                             </div>   
                              
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

   }else{

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
                    <Link to="/usuario">
                        <div className="centerCenterRow userName">
                            <p>User Name</p>
                            <div className="centerCenterRow"><MdKeyboardArrowDown /></div>
                        </div>
                    </Link> 
                 
                    <div> 
                         <img className="fotoperfil" src = "data:image/jpeg;base64,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"/>
                             </div> 
                          
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
