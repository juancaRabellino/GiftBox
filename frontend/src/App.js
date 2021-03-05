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
import { connect } from 'react-redux';
import carritoActions from './redux/actions/carritoActions';
import userActions from './redux/actions/userActions';

function App({loggedUser,carritoDelLS,logFromLS}) {
  if(localStorage.getItem("token") && !loggedUser){logFromLS(localStorage.getItem("token"))}
  if(localStorage.getItem("carrito")){
    carritoDelLS(JSON.parse(localStorage.getItem("carrito")),JSON.parse(localStorage.getItem("total")))
    console.log(JSON.parse(localStorage.getItem("total")))
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
            {/* <Route path='/usuario' component={PaginaUsuario}/> */}
            {loggedUser && <Route path='/usuario' component={EditUsuario}/>}
            {!loggedUser && <Route path="/registros" component={Registros} />}
            {!loggedUser && <Route path="/iniciarsesion" component={IniciarSesion} /> }
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
  logFromLS: userActions.logFromLS,
  carritoDelLS: carritoActions.carritoDelLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

