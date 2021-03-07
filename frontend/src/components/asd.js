import React from 'react'
import {connect} from 'react-redux'
import { IoCamera } from 'react-icons/io5'
import {useState} from 'react'
import userActions from '../redux/actions/userActions'

function RecuperarPassword(props) {
  
    const[editarUsuario, setEditUsuario ] = useState({})
    const [errores, setErrores] = useState([])

    const leerInputPass = e => {
        const valor = e.target.value
        const campo = e.target.name
        setEditUsuario({
            ...editarUsuario,    
            [campo]:valor
        })
    }    

 
    const cambiarPassword = () =>{
        props.editUsuarioPass(editarUsuario, props.loggedUser.id)
    }

  
    
    return (
        <div>
            
                        
                    <div className="cambiarPassword">
                    <p>Cambiar Contraseña</p>
                    <input type="password" placeholder="Nueva Contraseña" name="password" onChange={leerInputPass} />
                </div>
                
                <div className="guardaCambioContraseña" onClick={cambiarPassword} >
                    <p>GUARDAR</p>
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
     editUsuarioPass: userActions.editUsuarioPass,
     
}


export default connect(mapStateToProps, mapDispatchToProps)(RecuperarPassword)