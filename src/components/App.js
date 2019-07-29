import React from 'react';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
		<Router>
			<div className="App">
				{/* <Builder />
				<Results />
				<Recipe /> */}

				<Route path="/" exact component={Builder} />
				<Route path="/results" component={Results} />
				<Route path="/recipe" component={Recipe} />
			</div>
		</Router>
  );
}

export default App;
