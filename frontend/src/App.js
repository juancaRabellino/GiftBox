import './App.css'
import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/paquetes" component={Paquetes}/>
            <Route path="/paquetes/:_id" component={Paquete}/>
            <Redirect to="/paquetes" />
          </Switch>
        <WhatsApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;