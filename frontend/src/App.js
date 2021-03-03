import './App.css'
import React from 'react'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'
import PaginaUsuario from './Pages/PaginaUsuario.js'
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route path="/paquete/:_id" component={Paquete}/>
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