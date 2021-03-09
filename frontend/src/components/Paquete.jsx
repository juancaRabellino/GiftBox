import '../styles/paquete.css'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeft, BsFillPeopleFill, BsBuilding, BsGiftFill, BsIntersect, BsEnvelopeFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { FaMapMarkerAlt } from "react-icons/fa";



const Paquete = ({ loggedUser, match, paquetePorId, obtenerPaquetePorId, enviarValoracion }) => {
    const [valor, setValor] = useState(0)
    const [ultimoValor, setUltimoValor] = useState({ valor: 0 });
    useEffect(async () => {
        if (valor !== 0) {
            await enviarValoracion(match.params._id, { idUsuario: loggedUser.id, valor })
            obtenerPaquetePorId(match.params._id)
        }
    }, [valor])

    const productos = [
        [{
            titulo: 'Spa El Roble, Villa Crespo',
            descripcion: 'Especialmente diseñado para el bienestar físico, mental y espiritual. Un espacio creado para lograr calidez y armonía y quienes lo visiten puedan obtener una experiencia única.',
            imagen: 'https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png',
            lugar: 'Malabia 429'
        }],
        [
            {
                titulo: 'Spa El Roble, Villa Crespo',
                descripcion: 'Especialmente diseñado para el bienestar físicgadf, mental y espiritual. Un espacio creado para lograr calidez y armonía y quienes lo visiten puedan obtener una experiencia única.',
                imagen: 'https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png',
                lugar: 'Malabia 4291'
            }
        ],
        [
            {
                titulo: 'Spa El Roble, Villa Crespo',
                descripcion: 'Especialmente diseñado para el bienestar físico, mental y espiritual. Un espacio creado para lograr calidez y armonía y quienes lo visiten puedan obtener una experiencia únicaaaaaaaaaaaaaaaaaaaaaaaaaa.',
                imagen: 'https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png',
                lugar: 'Malabia 4293'
            }
        ],
        [
            {
                titulo: 'Spa El Roble, Villa Crespo',
                descripcion: 'Especialmente diseñado para el bienestar físidfgafdgdfco, mental y espiritual. Un espacio creado para lograr calidez y armonía y quienes lo visiten puedan obtener una experiencia única.',
                imagen: 'https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png',
                lugar: 'Malabia 4295'
            }
        ],
        [
            {
                titulo: 'Spa El Roble, Villa Crespo',
                descripcion: 'Especialmente diseñado para el bienestar físico, mental y espiritual. Un espacio creado para lograr calidez y armonía y quienes lo visiten puedan obtener una expehdfghdfgagadfgadfgdfgriencia única.',
                imagen: 'https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png',
                lugar: 'Malabia 429'
            }
        ]
    ]

    const id = match.params._id
    useEffect(() => {
        var paquete = obtenerPaquetePorId(match.params._id)
        if (paquetePorId) {
            var aux = { valor: 0 }
            aux = paquetePorId.valoracion.find(valoracionUsuario => valoracionUsuario.idUsuario === loggedUser.id)
            if (aux.valor !== null && aux !== undefined) {
                setUltimoValor(aux)
            }

        } 
    }, [id])

    console.log(ultimoValor)
    return (
        <>
            {paquetePorId &&
                <>
                    <div className="paqueteBanner"><Link to="/" style={{ display: 'flex', alignItems: 'center' }}><BsArrowLeft className="paqueteIcono" /><span>Regresar a la página principal</span></Link></div>
                    <div className="paqueteContainer">
                        <h2 className="tituloPaquete">{paquetePorId.nombre}</h2>
                        <p className="descripcionPaquete">{paquetePorId.descripcion}</p>
                        <div className="paqueteImgInfo">
                            <div className="paqueteImg" style={{
                                backgroundImage: `url(${paquetePorId.imagen})`
                            }}>
                            </div>
                            <div className="paqueteInfo">
                                <h4>Acerca de esta GiftBox</h4>
                                <div className="cantidadDePersonas"><BsFillPeopleFill className="icon" /> Para <span>{paquetePorId.cantidadPersonas}</span> persona/s</div>
                                <div className="categoria"><BsIntersect className="icon" /> Categoria: <span>{paquetePorId.categoria}</span></div>
                                <div className="ubicacion"><BsBuilding className="icon" /> Ubicacion: <span>{paquetePorId.ubicacion}</span></div>
                                <div className="vendidos"><BsGiftFill className="icon" /> Cantidad de paquetes vendidos: <span>{paquetePorId.cantidadVendidos.length}</span></div>
                                <div className="linea"></div>
                                <div className="formatodeRegalo">
                                    <h5>Formatos de Regalo:</h5>
                                    <p className="regaloDigital">Regalo digital</p>
                                    <p className="envioPorEmail">Envío por email</p>
                                </div>
                                <div className="linea"></div>
                                <div className="precio">$ {paquetePorId.precio}
                                    <a href="https://www.mercadopago.com.ar/ayuda/medios-de-pago-cuotas-promociones_264" target="blank">ver cuotas</a>
                                </div>
                                <button className="comprarPaquete">Comprar esta GiftBox</button>
                                <div className="mediosdepago"></div>
                            </div>
                        </div>
                    </div>
                    <div className="valoracionContainer">
                        <div className="valoracion">
                            <span>{(paquetePorId.promedio).toFixed(2)}</span>
                            <ReactStars count={5} value={ultimoValor.valor} onChange={setValor}
                                size={44} activeColor="#ffd700" isHalf={true} />

                        </div>
                        <p className="verComentarios">Ver comentarios del paquete</p>
                        <img src="https://fotos.subefotos.com/af333790da6d3696dec1241bd0c55308o.png" alt="estrellas" />
                    </div>
                    <div className="productosContainer">
                        <div className="encabezado">
                            <h3>Dentro del paquete: </h3>
                            <p>Tu agasajado va a poder disfrutar de estos <span>{productos.length}</span> productos</p>
                        </div>
                        <div className="productos">{
                            productos.map(producto => {
                                return (
                                    <>
                                        <div className="cardProducto">
                                            <img src={producto[0].imagen} alt="" style={{ width: '100%' }} />
                                            <div className="infoProducto">
                                                <div className="tituloProducto">
                                                    <h4>{producto[0].titulo}</h4>
                                                    <BsFillPeopleFill className="iconCard" />
                                                </div>
                                                <h5>{producto[0].descripcion.slice(0, 180) + '...'}</h5>
                                                <p className="lugarProducto"><FaMapMarkerAlt className="iconCard" /> {producto[0].lugar}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }</div>
                    </div>
                </>
            }
        </>
    )

}

const mapStateToProps = state => {
    return {
        todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
        paquetePorId: state.paqueteReducer.paquetePorId,
        loggedUser: state.userReducer.loggedUser
    }
}

const mapDispatchToProps = {
    obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
    obtenerPaquetePorId: paqueteActions.obtenerPaquetePorId,
    obtenerValoracion: paqueteActions.obtenerValoracion,
    enviarValoracion: paqueteActions.enviarValoracion
}

export default connect(mapStateToProps, mapDispatchToProps)(Paquete)