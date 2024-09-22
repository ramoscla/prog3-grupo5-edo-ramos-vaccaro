import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home';

function App() {
  return (

    <Switch>
      <Route path="/" exact={true} component={Home} />
    {/* <Route path="/favoritas" component={} />
     <Route path="/todas" component={} />
     <Route path="/detalle" component={} /> */}
    </Switch>

  );
}
export default App;
