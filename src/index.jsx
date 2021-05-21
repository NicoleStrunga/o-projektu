import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Gallery } from './Gallery/Gallery';
import './style.css';
import { Header } from './Header/Header';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
