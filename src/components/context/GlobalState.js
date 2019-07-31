import React, { useReducer } from 'react';
import foodReducer from './reducers';
import FoodContext from './FoodContext';

// This is the top-level component of the app
// State-changing functions will live here
export default function GlobalState({children}) {

	const allFoods = {
		proteins: ['Beef', 'Chicken', 'Pork', 'Tofu'],
		grains: ['White rice', 'Brown rice'],
		veggies: ['Broccoli', 'Spinach', 'Brussels Sprouts'],
		custom: ['Nuts']
	}

	const [state, dispatch] = useReducer(foodReducer, allFoods);

	return (
		<FoodContext.Provider value={state}>
			{children}
		</FoodContext.Provider>
	)
}
