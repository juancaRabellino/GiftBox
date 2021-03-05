import './App.css'
import React from 'react'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete.jsx";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Registro from "./components/Registros";
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'
import Home from './components/Home'
import PaginaUsuario from './components/PaginaUsuario.js'
import EditUsuario from './components/EditUsuario'
import Carrito from './components/Carrito';
import CarritoPaquetes from './components/CarritoPaquetes';
import IniciarSesion from './components/IniciarSesion';

function App() {
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
            <Route path='/registro' component={Registro}/>
            <Route path='/editUsuario' component={EditUsuario}/>
            <Route path='/iniciarSesion' component={IniciarSesion}/>
            <Redirect to="/" />
          </Switch>
        <WhatsApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
