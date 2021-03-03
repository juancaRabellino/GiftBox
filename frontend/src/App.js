import './App.css'
import Paquetes from "./components/Paquetes"
import Header from  "./components/Header"
import Footer from "./components/Footer"
import WhatsApp from './components/WhatsApp'

 
function App() {
  return (
    <div className="App">
      <Header/>
      <Paquetes />
      <WhatsApp/>
      <Footer/>
    </div>
  );
}

export default App;