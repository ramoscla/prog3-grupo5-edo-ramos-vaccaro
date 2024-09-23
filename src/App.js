import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Favorites from './Components/Pages/Favorites';

function App() {
  return (
    <>
   
 
    <Header/>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/favoritos" component={Favorites} />
    {/*  />
     <Route path="/proximamente" component={} />
     <Route path="/cartelera" component={} />
     <Route path="/detalle" component={} /> 
    
     */}
    </Switch>

    <Footer/>
    </>


  );
}
export default App;
