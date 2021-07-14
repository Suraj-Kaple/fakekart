import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route exact path="/products/:productid" component={ProductDetails} />
        <Route>404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
