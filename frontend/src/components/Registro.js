import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'



const Registro = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '', apellido: '', cuenta: '', password: '', imagenDeUsuario: ''
    })
    const [errores, setErrores] = useState([])


    const leerInput = e =>{
        var valor = e.target.value
        const campo = e.target.name
        if(campo==="imagenDeUsuario"){
            valor=e.target.files[0];
        }
        setNuevoUsuario({
            ...nuevoUsuario, 
            [campo]: valor
        }) 
    }

    const validarUsuario = async e => {
        e.preventDefault()
        if (nuevoUsuario.nombre === '' || nuevoUsuario.apellido === '' || nuevoUsuario.cuenta === '' ||
        nuevoUsuario.password === '' || nuevoUsuario.imagenDeUsuario === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡All fields are required!',
              })

            return false
        }
        setErrores([])
        const respuesta = await props.crearCuenta(nuevoUsuario)
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores)
        } else {
            Swal.fire({
                icon: 'success',
                title: 'You have registered your user',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const responseGoogle = async (response) => {
        console.log(response)
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Something has happened!',
              })
        } else {
            const respuesta = await props.crearCuenta({
                nombre: response.profileObj.givenName,
                apellido: response.profileObj.familyName,
                cuenta: response.profileObj.email,
                password: response.profileObj.googleId,
                imagenDeUsuario: response.profileObj.imageUrl,
                
            })
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'You have registered your user',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }
      }



   
    return (

        
        <div className="container-form">
            <div className="form">
            <h1>Create new account</h1>
            <input type="text" name="nombre" placeholder="Nombre"
            onChange={leerInput} />
            <input type="text" name="apellido" placeholder="Apellido"
            onChange={leerInput} />
            <input type="text" name="cuenta" placeholder="Nombre de cuenta" 
            onChange={leerInput} />
            <input type="password" name="password" placeholder="password"
            onChange={leerInput} />
             <label htmlFor="uploadButton" className="inputFile">
                        <p >Click here to Upload a User Image</p>
                        <input id="uploadButton" className="fileGame" type='file'  name='imagenDeUsuario' onChange={leerInput}/>
                    </label>
                    {console.log(validarUsuario)}
          
                   <div className="botones">
            <button className="buttonRegister" onClick={validarUsuario}>Create Account</button>

            <GoogleLogin className= "google"
    clientId="958442334135-59seulshhm4396e4ls8f3uugeggsenag.apps.googleusercontent.com"
    buttonText="Create Account"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>
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
    crearCuenta: userActions.crearCuenta
}

export default connect(mapStateToProps, mapDispatchToProps)(Registro) 