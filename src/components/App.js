import React from 'react';
import Builder from './builder/Builder';
import Results from './results/Results';
import Recipe from './recipe/Recipe';

function App() {
  return (
    <div className="App">
			<Builder />
			<Results />
			<Recipe />
    </div>
  );
}

export default App;
