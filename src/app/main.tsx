import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';

const Main = () => {
  return (
    <main>
      <Router>
      <div>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    </main>
  )
}

function Products() {
  return <h2>Products</h2>;
}

export default Main;