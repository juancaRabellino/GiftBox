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

const Header = () => {
    const [isOpen, setOpen] = useState(false)

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

export default Header