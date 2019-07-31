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

	// Passing this function to an event listener will call dispatch with this particular configuration
	function removeFood(foodId) {
		dispatch({
			type: 'remove_food',
			id: foodId
		})
	}

	const [state, dispatch] = useReducer(foodReducer, allFoods);

	// We can pass all state-changing functions into Context
	return (
		<FoodContext.Provider value={{
			foods: state,
			removeFood: removeFood
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
