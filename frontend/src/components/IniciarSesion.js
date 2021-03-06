import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

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
                title: 'Uy...',
                text: '¡Se necesitan llenar todos los campos!',
              })
            return false
        }
        setErrores([])
        const respuesta = await props.iniciarSesion(usuarioALoguear)
        if (respuesta && !respuesta.success) {
            setErrores([respuesta.errors])
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido a Gift Box',
                showConfirmButton: false,
                timer: 1500
              })

              props.history.push('/');
        }
    }

    const responseGoogle = async (response) => {
        
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: '¡Oh no!',
                text: '¡Algo ha ocurrido!',
            })
        }else{
            const respuesta = await props.iniciarSesion({
                cuenta: response.profileObj.email,
                password: response.profileObj.googleId,
            })
            if (respuesta && !respuesta.success) {
                setErrores([respuesta.mensaje])
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido/a a Gift Box!',
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
                {errores.map(error => <h1>{error}</h1>)}
            </div>

            <Link to="/enviar-email"><h5>Olvidaste tu contraseña?</h5></Link>
            
        </div>
      


    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userReducer.loggedUser
    }
}

const mapDispatchToProps = {
    iniciarSesion: userActions.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion)