import './App.css'
import React from 'react'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import PaginaUsuario from './pages/PaginaUsuario.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/paquetes" component={Paquetes}/>
            <Route path="/paquetes/:_id" component={Paquete}/>
            <Route exact path='/' component={Home}/>
            <Route path='/usuario' component={PaginaUsuario}/>
            <Redirect to="/" />
          </Switch>
        <WhatsApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;