import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Favorites from './Components/Pages/Favorites';
import Detalle from './Components/Pages/Detalle';
import TopRated from "./Components/Pages/TopRated";
import NotFound from './Components/Pages/NotFound';

function App() {
  return (
    <>


      <Header />

      <Switch>

        <Route path="/" exact={true} component={Home} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/top" component={TopRated} />
        <Route path="/populares" component={Home} />
        <Route path="/404" component={NotFound} />


      </Switch>
      
      <Footer />
    </>


  );
}
export default App;
