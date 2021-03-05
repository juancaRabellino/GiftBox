import { connect } from 'react-redux'
import React, { useState } from 'react'
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'



const Registro = ({crearCuenta}) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        apellido: '',
        cuenta: '',
        password: '',
        imagen: '',
        googleUser: false,
    })
    const [errores, setErrores] = useState([])


    const leerInput = (e) =>{
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

    const validarUsuario = async (e) => {
        e.preventDefault()

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const {nombre,apellido,cuenta,password,imagen} = nuevoUsuario
        var formNuevoUsuario = new FormData();
        formNuevoUsuario.append("nombre",nombre)
        formNuevoUsuario.append("apellido",apellido)
        formNuevoUsuario.append("cuenta",cuenta)
        formNuevoUsuario.append("password",password)
        formNuevoUsuario.append("imgFile",imagen)
        formNuevoUsuario.append("googleUser",false)
        
        if (nombre === '' || apellido === '' || cuenta === '' ||
        password === '' || imagen === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡All fields are required!',
              })

            return false
        }
        crearCuenta(formNuevoUsuario)
        .then(respuesta=>{
            if (respuesta && !respuesta.success) {
                console.log(respuesta)
                setErrores(respuesta.errors)
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'You have registered your user',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }  
        })
    }

        //GOOGLE REGISTRO
    const responseGoogle = async (googleResponse) => {
        if (googleResponse.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Sucedió algo inesperado!',
              })
        } 
        else {                
            var formNuevoUsuario = new FormData();
            formNuevoUsuario.append("nombre",googleResponse.profileObj.givenName)
            formNuevoUsuario.append("apellido",googleResponse.profileObj.familyName)
            formNuevoUsuario.append("cuenta",googleResponse.profileObj.email)
            formNuevoUsuario.append("password",googleResponse.profileObj.googleId)
            formNuevoUsuario.append("imgFile",googleResponse.profileObj.imageUrl)
            formNuevoUsuario.append("googleUser",true)

            const respuesta= await crearCuenta(formNuevoUsuario)
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            }
            //  else 
            // {
                // Swal.fire({
                //     icon: 'success',
                //     title: 'You have registered your user',
                //     showConfirmButton: false,
                //     timer: 1500
                //     })
                    // .then(function (result) {
                    //     if (result.value) {
                    //         window.location.href='/'
                    //     }})
                // }
            }
    }
   
    return (

        <div className="boxUserRegistro">

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
                <button onClick={validarUsuario}>Crear Cuenta</button>
                </div>

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

 

            <div className="errores">
                {errores && errores.map((error,index) => <h2 key={index}>{error}</h2>)}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.userReducer.loggedUser
    }
}
const mapDispatchToProps = {
    crearCuenta: userActions.crearCuenta,
    crearCuentaGoogle: userActions.crearCuentaGoogle,
    logOut: userActions.logOut

}

export default connect(mapStateToProps, mapDispatchToProps)(Registro) 