import React from 'react'
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.js'
import PaginaUsuario from './pages/PaginaUsuario.js'
import Registro from "./components/Registro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/usuario' component={PaginaUsuario}/>
          <Route path='/registro' componente={Registro}/>
        </Switch> 
      </BrowserRouter> 
    </div>
  );
}
export default App