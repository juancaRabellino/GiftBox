import React from 'react'
import {connect} from 'react-redux'
import { IoCamera } from 'react-icons/io5'
import {useState} from 'react'
import userActions from '../redux/actions/userActions'

function EditUsuario(props) {
    console.log(props)
    const[editarUsuario, setEditUsuario ] = useState({})
    const [errores, setErrores] = useState([])
    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setEditUsuario({
            ...editarUsuario,    
            [campo]:valor
        })
        
    }
    console.log(props.loggedUser)
    const cambiarPassword = () =>{
        props.editUsuario(editarUsuario, props.loggedUser.id)
        
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
                        <h2>{props.loggedUser && props.loggedUser.nombre}</h2>
                    </div>
                </div>
            </div>
            <div className="editUsuario">
                <form className="modificarEmailUsuario">
                    <p>Ingrese su Email</p>
                    <input type="text" placeholder="Email" name="cuenta" onChange={leerInput} ></input>
                
                <div className="cambiarPassword">
                    <p>Cambiar Contraseña</p>
                    <input type="password" placeholder="Nueva Contraseña" name="password" onChange={leerInput} ></input>                </div>
                </form>
                <div className="guardaCambioContraseña" onClick={cambiarPassword} >
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
     editUsuario: userActions.editUsuario
 }


export default connect(mapStateToProps, mapDispatchToProps)(EditUsuario)
