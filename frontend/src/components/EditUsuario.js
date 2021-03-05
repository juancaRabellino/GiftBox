import React from 'react'
import {connect} from 'react-redux'
import { IoCamera } from 'react-icons/io5'
import {useState} from 'react'

function EditUsuario() {
    const [errores, setErrores] = useState([])
    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        // enviarNuevaContraseña({
        //     ...usuarioALoguear,
        //     [campo]: valor
        // })
    }
    
    return (
        <div>
            <div className='imgTopUsuario'>
                <div className='boxUser'>
                    <div className="userIconos">
                        <div className="userImg" /*style={{backgroundImage: `url("/userImages/${loggedUser.imagen}")`}}*//>
                        <div className="iconoCambiarImg">
                            <p ><IoCamera /></p> 
                        </div>
                    </div>
                    <div className="datosUsuaros">
                        <h2>Nombre del Usuario</h2>
                        <h2>Mail del usuario</h2>
                    </div>
                </div>
            </div>
            <div className="editUsuario">
                <div className="modificarEmailUsuario">
                    <p>Ingrese su Email</p>
                    <input type="text" placeholder="Email" onChange={()=> {}} ></input>
                    <button onClick={() => {}}>Modificar</button>
                </div>
                <div className="cambiarPassword">
                    <p>Cambiar Contraseña</p>
                    <input type="password" placeholder="Nueva Contraseña" onChange={()=> {}} ></input>
                    <input type="password" placeholder="Repetir contraseña" onChange={()=> {}} ></input>
                </div>
                <div className="guardaCambioContraseña" onClick={() => {}} >
                    <p>GUARDAR</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
     loggedUser: state.userReducer.loggedUser
    }
 }
 const mapDispatchToProps = {
 }


export default connect(mapStateToProps, mapDispatchToProps)(EditUsuario)
