import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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

function Home() {
  return <h2>Home</h2>;
}

function Products() {
  return <h2>Products</h2>;
}

export default Main;