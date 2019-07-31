import React from 'react';
import FoodContext from './FoodContext';

export default function GlobalState({children}) {
	const allFoods = {
		proteins: ['Beef', 'Chicken', 'Pork', 'Tofu'],
		grains: ['White rice', 'Brown rice'],
		veggies: ['Broccoli', 'Spinach', 'Brussels Sprouts'],
		custom: ['Nuts']
	}

	return (
		<FoodContext.Provider value={allFoods}>
			{children}
		</FoodContext.Provider>
	)
}
