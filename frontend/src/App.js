import React from 'react'
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.js'
import PaginaUsuario from './pages/PaginaUsuario.js'
import IniciarSesion from "./components/IniciarSesion"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/usuario' component={PaginaUsuario}/>
          <Route exact path='/IniciarSesion' component={IniciarSesion}/>
        </Switch> 
      </BrowserRouter> 
    </div>
  );
}
export default App