import React from 'react'
import {connect} from 'react-redux'
import { IoCamera } from 'react-icons/io5'
import {useState} from 'react'
import userActions from '../redux/actions/userActions'

function EditUsuario(props) {
    console.log(props)
    const[editarUsuario, setEditUsuario ] = useState({})
    const [editImagen, setEditImagen] = useState({})
    const [errores, setErrores] = useState([])

    const leerInputPass = e => {
        const valor = e.target.value
        const campo = e.target.name
        setEditUsuario({
            ...editarUsuario,    
            [campo]:valor
        })
    }    

    const leerImPass = e => {
        const valor =e.target.files[0]
        const campo = e.target.name
        setEditImagen({
            ...editImagen,    
            [campo]:valor
        })        
    }

    console.log(editarUsuario)
    const cambiarPassword = () =>{
        props.editUsuarioPass(editarUsuario, props.loggedUser.id)
    }

    const cambiarImagen = () =>{
        
        const {imagen} = editImagen
        var formNuevaImg = new FormData();
        formNuevaImg.append("imgFile",imagen)
        props.editarUsuarioImg(formNuevaImg, props.loggedUser.id)
        props.history.push('/editUsuario')
    }
    
    return (
        <div>
            <div className='imgTopUsuario'>
                <div className='boxUser'>
                    <div className="userIconos">
                        <div className="userImg"></div>
                        <div className="iconoCambiarImg">
                            <p><IoCamera /></p> 
                        </div>
                    </div>
                    <div className="datosUsuaros">
                        <h2>{props.loggedUser && props.loggedUser.nombre}</h2>
                    </div>
                </div>
            </div>
            <div className="editUsuario">
                <form className="modificarEmailUsuario">
                    <div className="cambiarPassword">
                    <p>Cambiar Contraseña</p>
                    <input type="password" placeholder="Nueva Contraseña" name="password" onChange={leerInputPass} />
                </div>
                </form>
                <div className="guardaCambioContraseña" onClick={cambiarPassword} >
                    <p>GUARDAR</p>
                </div>
            </div>
            <div className="editUsuario">
                <div className="modificarEmailUsuario">
                    <label htmlFor="uploadButton" className="inputFile">
                        <p>Cambie Foto</p>
                        <input id="uploadButton" className="imgFile" type="file"  name="imagen" onChange={leerImPass}/>
                    </label>
                </div>
                <div className="guardaCambioContraseña" onClick={cambiarImagen} >
                    <p>CAMBIAR IMG</p>
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
     editUsuarioPass: userActions.editUsuarioPass,
     editarUsuarioImg: userActions.editarUsuarioImg
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUsuario)