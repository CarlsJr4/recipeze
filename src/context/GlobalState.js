import React, { useReducer, useState } from 'react';
import reducer from './reducers';
import FoodContext from './FoodContext';
import apiKey from '../key';
var request = require('request');

// UX Goals
// Next goal: Use the esc key to get out of the form
// Another goal: prevent user from submitting empty list items through modal box
// Style the app to be responsive and good-looking

// Coding goals
// When refreshing the results page, prevent the state from resetting
// Connect firebase to the app

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

	const [APIState, modifyAPI] = useState({
		searchTerms: [],
		response: []
	})

	// Handles an array that will become the API request's search terms
	function selectFood(id, name) {
		const checkBox = document.querySelector(`input[id="${id}"]`);
		if (checkBox.checked) {
			const foodInfo = {name, id} // Set up an object to push to the array, incase we need to delete by ID
			modifyAPI({...APIState, searchTerms: [...APIState.searchTerms, foodInfo]})
		} else {
			const searchArray = [...APIState.searchTerms]; // Copy the search array
			const filteredSearch = searchArray.filter(item => item.id !== id); // Filter the search array
			modifyAPI({...APIState, searchTerms: [...filteredSearch]}); // Update the state
		}
	}

	function sendAPIRequest() {
		let APIResponse = [];
		const searchArray = [...APIState.searchTerms]; // Make a copy of the state
		const APIRequest = []; // Initialize an array for each name
		searchArray.forEach(item => APIRequest.push(item.name)); // Extract each name and push to array

		// Send information to Spoonacular API
		const searchString = APIRequest.join().toLowerCase();
		const key = apiKey;
		var options = { 
			method: 'GET',
		  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
		  headers: { 
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": key
		  },
		  qs: { 
			"number": "5",
			"ranking": "1",
			"ignorePantry": "false",
			"ingredients": searchString 
		  }
		};

		// Add the API response to the app's state
		request(options, function (error, response, body) {
			if (error) throw new Error(error);
		  const res = JSON.parse(body);
			console.log('Parsed response: ', res);
			APIResponse = [...res];
			return modifyAPI({...APIState, response: [...APIResponse]}); 
		});

		// // Placeholder response so we don't use up too many API calls
		// const res = [
		// 	{
		// 		id: 1,
		// 		title: 'title1',
		// 		image: 'https://picsum.photos/200'
		// 	},
		// 	{
		// 		id: 2,
		// 		title: 'title2',
		// 		image: 'https://picsum.photos/200'
		// 	},
		// 	{
		// 		id: 3,
		// 		title: 'title3',
		// 		image: 'https://picsum.photos/200'
		// 	}
		// ]
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
			sendAPIRequest,
			APIState, // This is only here for debugging
			modifyAPI
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
