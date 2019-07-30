import React, { useState } from 'react';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// New goal: With the hook established, have it directly update the app's state

export const foodStateContext = React.createContext();

function App() {
	
	const allFoods = {
			proteins: ['Beef', 'Chicken', 'Pork', 'Tofu'],
			grains: ['White rice', 'Brown rice'],
			veggies: ['Broccoli', 'Spinach', 'Brussels Sprouts'],
			custom: ['Nuts']
	}

	const [foods, updateFood] = useState(allFoods);

	function test() {
		console.log('foo');
	}

  return (
		<foodStateContext.Provider value={updateFood}>
			<Router>
				<div className="App">
					<Route 
						path="/" 
						render={() => <Builder foodList={foods}/>}
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
		</foodStateContext.Provider>
  );
}

export default App;
