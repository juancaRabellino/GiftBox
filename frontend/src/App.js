import Paquetes from "./components/Paquetes";
import Paquete from "./components/Paquete";
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/paquetes" component={Paquetes}/>
          <Route path="/paquetes/:_id" component={Paquete}/>
          <Redirect to="/paquetes" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;