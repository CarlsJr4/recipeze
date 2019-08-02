import React, { useReducer, useState } from 'react';
import reducer from './reducers';
import FoodContext from './FoodContext';

// UX Goals
// Next goal: Use the esc key to get out of the form
// Another goal: prevent user from submitting empty list items through modal box

// How do we handle deleting a selected food? Will it dissapear from the search state?

// Coding goals: 
// Next goal: Click the arrow button to submit names to spoonacular API
// Clicking the arrow will loop through searchQueryState and extract all names 


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

	// Handles the create, delete state of each foodcard
	const [ingredientState, dispatch] = useReducer(reducer, ingredients);

	// A temporary array that will hold the contents of foods to send to Spoonacular's API
	const [searchQueryState, updateSearchQuery] = useState([]);

	// What to send to the actual API
	const [APIRequest, updateAPIRequest] = useState([]);

	function selectFood(id, name) {
		const checkBox = document.querySelector(`input[id="${id}"]`);
		if (checkBox.checked) {
			const foodInfo = {name, id} // Set up an object to push to the array, incase we need to delete by ID
			updateSearchQuery([...searchQueryState, foodInfo]);
		} else {
			const stateCopy = [...searchQueryState];
			const searchState = stateCopy.filter(item => item.id !== id);
			updateSearchQuery([...searchState]);
		}
	}

	function populateSearch() {
		const searchState = [...searchQueryState]; // Make a copy of the state
		const APIArray = []; // Initialize an array for each name
		searchState.forEach(item => APIArray.push(item.name)); // Extract each name and push to array
		console.log(APIArray);
		updateAPIRequest([...APIArray]); // Why isn't the state updating at all?
		console.log(APIRequest);
	}

	// Passing these functions to event listeners will call dispatch with these particular configurations
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
			addFood,
			selectFood,
			searchQueryState, // Technically, we don't need to pass this down
			populateSearch
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
