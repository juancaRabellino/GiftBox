import './App.css'
import React, { useState } from 'react'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete.jsx";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Registros from "./components/Registros";
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'
import Home from './components/Home'
import PaginaUsuario from './components/PaginaUsuario.js'
import EditUsuario from './components/EditUsuario'
import Carrito from './components/Carrito';
import CarritoPaquetes from './components/CarritoPaquetes';
import IniciarSesion from './components/IniciarSesion';
import { connect } from 'react-redux'
import userActions from "./redux/actions/userActions"

function App(props) {
  const [recargar, setRecargar] = useState(false)

  if (props.loggedUser) {
    var routes = 
    <>
      <Route path='/editUsuario' component={EditUsuario}/>
    </>

  } else if (localStorage.getItem('token')) { 
    props.logFromLS(localStorage.getItem('token'))
    .then(respuesta => {
      if (respuesta === '/') setRecargar(!recargar) 
    })

  } else {
    var routes =
    <>
      <Route path="/registros" component={Registros} />
      <Route path="/iniciarsesion" component={IniciarSesion} />
    </>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/paquetes/" component={Paquetes}/>
            <Route path="/carrito/" component={Carrito}/>
            <Route path="/carritoPaquetes/" component={CarritoPaquetes}/>
            <Route exact path="/paquete/:_id" component={Paquete}/>
            <Route path='/usuario' component={PaginaUsuario}/>
            {routes}
            <Redirect to="/" />
          </Switch>
        <WhatsApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userReducer.loggedUser
  }
}

const mapDispatchToProps = {
  logFromLS: userActions.logFromLS
}


export default connect(mapStateToProps, mapDispatchToProps)(App)