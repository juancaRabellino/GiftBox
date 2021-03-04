import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'



const Registro = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        apellido: '',
        cuenta: '',
        password: '',
        imagen: ''
    })
    const [errores, setErrores] = useState([])


    const leerInput = e =>{
        var valor = e.target.value
        const campo = e.target.name
        if(campo === "imagen"){
            valor=e.target.files[0];
        }
        setNuevoUsuario({
            ...nuevoUsuario, 
            [campo]: valor
        }) 
    }

    const validarUsuario = async e => {
        setErrores([])
        e.preventDefault()


        const {nombre,apellido,cuenta,password,imagen} = nuevoUsuario

        var formNuevoUsuario = new FormData();

        formNuevoUsuario.append("nombre",nombre)
        formNuevoUsuario.append("apellido",apellido)
        formNuevoUsuario.append("cuenta",cuenta)
        formNuevoUsuario.append("password",password)
        formNuevoUsuario.append("imgFile",imagen)
        console.log(formNuevoUsuario)
        console.log(imagen)
        if (nombre === '' || apellido === '' || cuenta === '' ||
        password === '' || imagen === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡All fields are required!',
              })

            return false
        }

        setErrores([])
        const respuesta = await props.crearCuenta(formNuevoUsuario)

        console.log(respuesta)

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

        //GOOGLE REGISTRO
    const responseGoogle = async (googleResponse) => {
        console.log(googleResponse)

        const formGoogle = new FormData();

        if (googleResponse.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Sucedió algo inesperado!',
              })
        } 
        else {
                {                
                formGoogle.append("nombre", googleResponse.profileObj.givenName)
                formGoogle.append("apellido", googleResponse.profileObj.familyName)
                formGoogle.append("cuenta", googleResponse.profileObj.email)
                formGoogle.append("password", googleResponse.profileObj.googleId)
                
                const respuesta = await props.crearCuenta(formGoogle)
            }
            // DATOS A GOOGLE?
            // if (respuesta && !respuesta.success) {
            //     setErrores(respuesta.errores)
            // } else 
            {
                Swal.fire({
                    icon: 'success',
                    title: 'You have registered your user',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    // .then(function (result) {
                    //     if (result.value) {
                    //         window.location.href='/'
                    //     }})
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
                        <p>Agrega tu imagen</p>
                        <input id="uploadButton" className="imgFile" type="file"  name="imagen" onChange={leerInput}/>
                    </label>
         
                   <div className="botones">
            <button className="buttonRegister" onClick={validarUsuario}>Crear Cuenta</button>

{/* CLIENTE DE GOOGLE */}
            <GoogleLogin className= "google"
                clientId="1017297947872-a4k36afp8ren4g12ov8c4old1udn3v4b.apps.googleusercontent.com"
                buttonText="Create Account"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        </div>

            

            {/* <div className="errores">
                {errores && errores.map((error,index) => <h2 key={index}>{error}</h2>)}
            </div> */}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.userReducer.loggedUser
    }
}
const mapDispatchToProps = {
    crearCuenta: userActions.crearCuenta
}

export default connect(mapStateToProps, mapDispatchToProps)(Registro) 