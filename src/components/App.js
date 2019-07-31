import React from 'react';
import GlobalState from './context/GlobalState';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Goal: Refactor app to pull data from a GlobalState component
// Goal 2: With the hook established, have it directly update the app's state

function App() {
	
	// Because we have complex state logic, maybe can use useReducer as an alternative to useState
	// We should use it because the next state depends on the previous one
	// const [foods, updateFood] = useState(allFoods);

  return (
		<GlobalState>
			<Router>
				<div className="App">
					<Route 
						path="/" 
						component={Builder}
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
		</GlobalState>
  );
}

export default App;
