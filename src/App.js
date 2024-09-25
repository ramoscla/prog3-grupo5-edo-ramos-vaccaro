import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Favorites from './Pages/Favorites';
import Detalle from './Pages/Detalle';
import TopRated from "./Pages/TopRated";
import NotFound from './Pages/NotFound';
import Populares from './Pages/Populares';
import SearchResults from './Pages/SearchResults';
import './App.css'

function App() {
  return (
    <>


      <Header />
      <div className="app">
      <Switch>

        <Route path="/" exact={true} component={Home} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/top" component={TopRated} />
        <Route path="/populares" component={Populares} />
        <Route path="/404" component={NotFound} />
        <Route path="/search" component={SearchResults} />



      </Switch>
      </div>

      <Footer />
    </>


  );
}
export default App;
