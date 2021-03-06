import React, {useState} from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Swal from 'sweetalert2'

const RecuperarPassword = ( props ) => {
    const cuenta = props.match.params.cuenta
    const [usuario, setUsuario] = useState({ password:'', nuevaPassword: '' })
    const [errores, setErrores] = useState ([])
    const [visible, setVisible] = useState(false)

    const leerInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario ({ //modify the user I have in the useState
            ...usuario,
            [campo]:valor
        });
    }

    const checkearInputs = !usuario.password
    const cambiarPassword = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if(checkearInputs){
            alert ('Debe ingresar una nueva contraseña')
            return true
        }else if(usuario.password !== usuario.nuevaPassword){
            alert('las contraseñas no coinciden')
        }else{
            const respuesta = await props.nuevaPassword(cuenta, usuario.password)
            console.log(respuesta)
            if(respuesta && !respuesta.success){
                Swal.fire({
                    icon: 'error',
                    title: 'Ups!',
                    text: "Algo salio mal, intenta nuevamente!",
                    showConfirmButton: false,
                    timer: 4000
                    })
            }else {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial!!',
                    text: "Tu contraseña se restablecio correctamente!",
                    showConfirmButton: false,
                    timer: 4000
                    })
            }
        }
    }

return (
    <div className="containerRegister">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "register">
                    <h2>Recuperar Contraseña</h2>
                    <div className="userNameAndPassword">
                        <div style={{display:'flex',alignItems:'center'}}>
                            <input className="inputRegister" type={visible ? "text" : "password"} name="password" placeholder="Contraseña" onChange={leerInput} />
                            <input className="inputRegister" type={visible ? "text" : "password"} name="newPassword" placeholder="Contraseña" onChange={leerInput} />
                            <i className={visible ? "far fa-eye-slash" : "far fa-eye"} onClick={()=>setVisible(!visible)}></i>
                        </div>
                    </div>
                    <button className="botonRegister" onClick={cambiarPassword} >Restablecer Contraseña</button>
                </div>
            </div>
        <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => alert(error))} */}
        </div>
    </div>
        )
    }

const mapDispatchToProps = { // map the actions
    nuevaPassword: userActions.nuevaPassword //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (RecuperarPassword)