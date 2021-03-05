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
<<<<<<< HEAD
  if(localStorage.getItem("token") && !loggedUser){logFromLS(localStorage.getItem("token"))}
=======
  
  const [renderAgain,setRenderAgain] = useState(false)
>>>>>>> 6647d08eecd31533d3959666b4d173cf0b7b1afb
  if(localStorage.getItem("carrito")){
    carritoDelLS(JSON.parse(localStorage.getItem("carrito")),JSON.parse(localStorage.getItem("total")))
  }
  var routes=null
  // if(localStorage.getItem("token") && !loggedUser){logFromLS(localStorage.getItem("token"))}
  if(!loggedUser && localStorage.getItem("token")){
    console.log('sooy ls')
    logFromLS(localStorage.getItem('token'))
    .then(backToHome => 
      {
        if(backToHome==='/'){
        setRenderAgain(!renderAgain)}
        
    })
    .catch(error => setRenderAgain(!renderAgain))
  }
  console.log(loggedUser)
  if(!loggedUser){
    routes=
  <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/paquetes/" component={Paquetes}/>
    <Route exact path="/carrito/" component={Carrito}/>
    <Route exact path="/carritoPaquetes/" component={CarritoPaquetes}/>
    <Route exact path="/paquete/:_id" component={Paquete}/>
    <Route exact path="/registro" component={Registros} />
    <Route exact path="/iniciarsesion" component={IniciarSesion} />
    <Redirect to="/"/>

  </>
   }
  if(loggedUser){
    routes=
    <>
      <Route exact path="/" component={Home}/>
      <Route exact path="/paquetes/" component={Paquetes}/>
      <Route exact path="/carrito/" component={Carrito}/>
      <Route exact path="/carritoPaquetes/" component={CarritoPaquetes}/>
      <Route exact path="/paquete/:_id" component={Paquete}/>  
      <Route exact path="/usuario" component={PaginaUsuario}/>   
      <Route exact path="/editUsuario" component={EditUsuario}/> 
      
      <Redirect to="/"/> 
       
     

    </>
 
  }
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
          <Switch>
            
    <Route exact path="/registro" component={Registros} />
            {routes}
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

