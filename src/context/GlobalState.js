import React, { useReducer, useState } from 'react';
import reducer from './reducers';
import FoodContext from './FoodContext';
// import apiKey from '../key';
// var request = require('request');

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
	// const [searchQueryState, updateSearchQuery] = useState([]);

	// Stores response as an object
	// const [APIResponse, populateResponse] = useState([]);

	// Keeps track of what is being sent to and received from Spoonacular's API
	const [APIState, modifyAPI] = useState({
		searchTerms: [],
		response: []
	})

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
		const searchArray = [...APIState.searchTerms]; // Make a copy of the state
		const APIRequest = []; // Initialize an array for each name
		searchArray.forEach(item => APIRequest.push(item.name)); // Extract each name and push to array
		// Do the API stuff
		// const searchString = APIArray.join().toLowerCase();
		// console.log(searchString);
		// const key = apiKey;
		// var options = { 
		// 	method: 'GET',
		//   url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
		//   headers: { 
		// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		// 	"x-rapidapi-key": key
		//   },
		//   qs: { 
		// 	"number": "5",
		// 	"ranking": "1",
		// 	"ignorePantry": "false",
		// 	"ingredients": searchString 
		//   }
		// };
		
		// request(options, function (error, response, body) {
		//   if (error) throw new Error(error);
		//   const res = JSON.parse(body);
		//   // Figure out a way to take the object and store it in a state
		//   console.log(res);
		//   receiveFoods(res);
		//   console.log(APIResponse);
		// });
		// Placeholder response so we don't use up too many API calls
		const res = [
			{
				id: 1,
				title: 'title1',
				image: 'https://picsum.photos/200'
			},
			{
				id: 2,
				title: 'title2',
				image: 'https://picsum.photos/200'
			},
			{
				id: 3,
				title: 'title3',
				image: 'https://picsum.photos/200'
			}
		]
		return modifyAPI({...APIState, response: [...res]}); // Reset the search state so duplicates don't get sent if the user hits the back button
		// What if we use unload to reset the search query? NOTE: We need to reset the search 
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
			APIState
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
