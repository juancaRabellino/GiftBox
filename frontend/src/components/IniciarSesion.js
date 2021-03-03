import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'

const IniciarSesion = (props) => {
    const [usuarioALoguear, setUsuarioALoguear] = useState({})
    const [errores, setErrores] = useState([])

    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setUsuarioALoguear({
            ...usuarioALoguear,
            [campo]: valor
        })
    }

    const validarUsuario = async e => {
        e.preventDefault()
        if (usuarioALoguear.cuenta === '' || usuarioALoguear.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡All fields are required!',
              })
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(usuarioALoguear)
        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Welcome to MyTinerary',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const responseGoogle = async (response) => {
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Something has happened!',
            })
        }else{

            const respuesta = await props.loginUser({
                cuenta: response.profileObj.givenName,
                password: response.profileObj.googleId,
            })
            if (respuesta && !respuesta.success) {
                setErrores([respuesta.mensaje])
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to MyTinerary',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        }
      }
      

    return (
        <div className="container">
            <div className="form">
            <h1 className="logeo">Login</h1>
            <input  type="text" name="cuenta" placeholder="Nombre de usuario"
            onChange={leerInput} />
            <input type="password" name="password" placeholder="Password"
            onChange={leerInput} />
            </div>

            
            <div className="botoncitos">
            <button className="buttonLogin" onClick={validarUsuario}>Login</button>
            <GoogleLogin className="googlecito"
    clientId="958442334135-59seulshhm4396e4ls8f3uugeggsenag.apps.googleusercontent.com"
    buttonText="Login Account"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div> 
           


            <div className="errores">
                {errores.map(error => <h2>{error}</h2>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser
    }
}

const mapDispatchToProps = {
    loginUser: userActions.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion)