import './App.css'
import React from 'react'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'
import Home from './components/Home'
import PaginaUsuario from './components/PaginaUsuario'
import IniciarSesion from './components/IniciarSesion'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/paquetes/" component={Paquetes}/>
            <Route path="/paquete/:_id" component={Paquete}/>
            <Route path='/paginausuario' component={PaginaUsuario}/>
            <Route path='/iniciarsesion' component={IniciarSesion}/>
            <Redirect to="/" /> 
          </Switch>
        <WhatsApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
