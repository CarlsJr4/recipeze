import React, { useReducer } from 'react';
import reducer from './reducers';
import FoodContext from './FoodContext';

// Next goal: Toggle plus button to show/hide it and input
// Next next goal: Submit the mealcard forms and turn all responses into an array to be submitted to API
// This is the top-level component of the app
export default function GlobalState({children}) {

	const ingredients = {
		proteins: [
			{ name: 'Beef', id: 'p1'},
			{ name: 'Chicken', id: 'p2'},
			{ name: 'Pork', id: 'p3'},
		],
		grains: [
			{ name: 'White Rice', id: 'g1'},
			{ name: 'Brown Rice', id: 'g2'},
		],
		veggies: [
			{ name: 'Broccoli', id: 'v1'},
			{ name: 'Spinach', id: 'v2'},
			{ name: 'Brussels Sprouts', id: 'v3'},
		],
		custom: [
			{ name: 'Nuts', id: 'c1'},
		],
	}

	const [ingredientState, dispatch] = useReducer(reducer, ingredients);

		// Passing this function to an event listener will call dispatch with this particular configuration
		function removeFood(id, category) {
			dispatch({
				type: 'remove_food',
				id,
				category
			})
		}

		function addFood(inputValue, category) {
			dispatch({
				type: 'add_food',
				inputValue,
				category
			})
		}

	return (
		<FoodContext.Provider value={{
			ingredients: ingredientState,
			removeFood,
			addFood
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
