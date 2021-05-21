import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Gallery } from './Gallery/Gallery';
import './style.css';

const App = () => (
  <Router>
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">O projektu</Link>
            </li>
            <li>
              <Link to="/about">O nás</Link>
            </li>
            <li>
              <Link to="/gallery">Galerie</Link>
            </li>
          </ul>
        </nav>
      </header>

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
