import React, { useState } from 'react';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Task: Load all foods from top-level app state

// State should live at app level so that all router components can access it 
// Maybe we should use the context API to pass data down

function App() {
	
	const allFoods = {
			proteins: ['Beef', 'Chicken', 'Pork', 'Tofu'],
			grains: ['White rice', 'Brown rice'],
			veggies: ['Broccoli', 'Spinach', 'Brussels Sprouts'],
			custom: ['Nuts']
	}

	const [foods, updateFood] = useState(allFoods);

  return (
		<Router>
			<div className="App">
				<Route 
					path="/" 
					render={() => <Builder foodList={foods} updateFood={updateFood}/>}
					exact
				/> 
				<Route 
					path="/results" 
					component={Results} 
				/>
				<Route 
					path="/recipe" 
					component={Recipe} 
				/>
			</div>
		</Router>
  );
}

export default App;
