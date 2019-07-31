import React, { useReducer } from 'react';
import foodReducer from './reducers';
import FoodContext from './FoodContext';

// This is the top-level component of the app
export default function GlobalState({children}) {

	const allFoods = {
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

	const [state, dispatch] = useReducer(foodReducer, allFoods);

		// Passing this function to an event listener will call dispatch with this particular configuration
		function removeFood(foodId) {
			dispatch({
				type: 'remove_food',
				id: foodId
			})
		}

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
