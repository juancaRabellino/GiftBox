import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {connect} from "react-redux"
import usersActions from "../redux/actions/userActions"
import Hamburger from 'hamburger-react'
import Swal from "sweetalert2"
import {useState} from 'react'
import {AiOutlineShop} from 'react-icons/ai'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {FiBriefcase} from 'react-icons/fi'
import {IoLogoInstagram} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'




const Footer = () => {
 return(
     <>
        <div className="footer">
            <div className="footerArriba">
                <div className="footerArribaItem">
                    <AiOutlineShop/>
                    <p>Puntos de venta</p>
                </div>                
                <span>|</span>
                <div className="footerArribaItem">
                    <AiOutlineQuestionCircle/>
                    <p>Necesitas ayuda? Escribinos</p>
                </div>
                <span>|</span>
                <div className="footerArribaItem">
                    <FiBriefcase/>
                    <p>Venta Corporativa</p>
                </div>                
            </div>
            <div className="footerMedio">
                <div className="fraseFooter">
                    <p>Regalamos porque ver felices a los nuestros <span className="fraseFooterColor">nos hace muy felices.</span></p>
                </div>
                <div className="seccionesMedioFooterPadre">
                    <div className="seccionesMedioFooter">
                        <h3 className="regalosFooter">Regalos</h3>
                        <p>Toc-Toc! En Casa</p>
                        <p>Ñam! Gastronomía</p>
                        <p>Omm! Estar Bien</p>
                        <p>Ahh! Aventura</p>
                        <p>Wow! Estadías</p>
                        <p>Jaja! Entretenimiento</p>
                        <p>Mix! Blends</p>
                    </div>
                    <div className="seccionesMedioFooter">
                        <h3 className="regalosFooter">Ayuda</h3>
                        <p>Contacto</p>
                        <p>Preguntas Frecuentes</p>

                    </div>
                    <div className="seccionesMedioFooter">
                        <h3 className="regalosFooter">BigBox</h3>
                        <p>¿Que es GiftBox?</p>
                        <p>Puntos de venta</p>
                        <p>Soluciones empresariales</p>
                        <p>Trabajá con nosotros</p>
                        <p>Convertite en partner</p>
                    </div>
                </div>
            </div>
            <div className="footerAbajo">
                <p>Políticas y garantías</p>
                <p>Términos y condiciones</p>
                <div className="devolverCompraButton">
                    <p>Devolver mi Compra</p>
                </div>
                <p>|</p>
                <div className="partnersButton">
                    <p>Partners</p> 
                </div>
                <div className="redesFooter">
                    <IoLogoInstagram className="iconoFooter"/>
                    <FaFacebookF/>
                </div>
                
                
            </div>
        </div>
     </>
 )
}

export default Footer