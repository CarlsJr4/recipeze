import React from 'react';
import GlobalState from '../context/GlobalState';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalState>
      <Router baseline="/">
        <div className="App">
          <Route path="/" component={Builder} exact />
          <Route path="/results" component={Results} />
          <Route path="/recipe" component={Recipe} />
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
