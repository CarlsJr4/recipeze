import React, { useReducer, useState, useEffect } from 'react';
import reducer from './reducers';
import FoodContext from './FoodContext';
import apiKey from '../key';
var request = require('request');

// UX Goals
// Next goal: Use the esc key to get out of the form


// This is the top-level component of the app
export default function GlobalState({children}) {

	const defaultIngredients = {
		proteins: [
			{ name: 'Beef', id: 'p1'}, 
			{ name: 'Chicken', id: 'p2'},
			{ name: 'Pork', id: 'p3'},
			{ name: 'Tofu', id: 'p4'},
			{ name: 'Salmon', id: 'p5'},
		],
		grains: [
			{ name: 'White Rice', id: 'g1'},
			{ name: 'Brown Rice', id: 'g2'},
			{ name: 'Quinoa', id: 'g3'},
		],
		veggies: [
			{ name: 'Broccoli', id: 'v1'},
			{ name: 'Spinach', id: 'v2'},
			{ name: 'Lettuce', id: 'v3'},
		],
		custom: [
			{ name: 'Peanuts', id: 'c1'},
		],
	}
	
	const storedFoods = window.localStorage.getItem('ingredientList'); 
	const parsedFoods = JSON.parse(storedFoods)

	const [ingredientState, dispatch] = useReducer(reducer, parsedFoods);

	// If localStorage has nothing, we must populate state first to render the app, then write the default ingredients to localStorage
	if (!parsedFoods) {
		dispatch({
			type: 'load_foods',
			defaultIngredients
		})
		window.localStorage.setItem('ingredientList', JSON.stringify(defaultIngredients));
	}

	// Write to localStorage when foodCards are modified
	useEffect(() => window.localStorage.setItem('ingredientList', JSON.stringify(ingredientState)), [ingredientState]);

	const [APIState, modifyAPI] = useState({
		searchTerms: [],
		response: []
	});

	const [recipeInfo, setRecipeInfo] = useState({});

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

	function getRecipeByID(id) {
		// let APIResponse = []
		// const key = apiKey;
		// var options = { 
		// 	method: 'GET',
		//   url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
		//   headers: { 
		// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		// 	"x-rapidapi-key": key
		//   },
		// };

		// // Add the API response to the app's state
		// request(options, function (error, response, body) {
		// 	if (error) throw new Error(error);
		//   const res = JSON.parse(body);
		// 	console.log('Parsed response: ', res);
		// 	APIResponse = res;
		// 	return setRecipeInfo(APIResponse); 
		// });

		// Placeholder response
		// Note: ExtendedIngredients is bugged in the live version
		const res = {
			servings: 10,
			extendedIngredients: [
				{
					originalString: "1 quart water or chicken stock"
				},
				{
					originalString: "1 quart water or chicken stock"
				},
				{
					originalString: "1 quart water or chicken stock"
				}
			],
			title: "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
			readyInMinutes: 45,
			image: "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg",
			instructions: "Lorem Ipsum",
			analyzedInstructions: [{
					name: "",
					steps: [
						{
							number: 1,
							step: "lorem ipsum"
						},
						{
							number: 2,
							step: "lorem ipsum"
						},
						{
							number: 3,
							step: "lorem ipsum"
						}
					]
				}
			]
		}
		return setRecipeInfo(res)
	}

	function sendAPIRequest() {
		// let APIResponse = [];
		// const searchArray = [...APIState.searchTerms]; // Make a copy of the state
		// if (!searchArray.length) {
		// 	alert('You must select at least one food to submit')
		// 	return
		// }
		// const APIRequest = []; // Initialize an array for each name
		// searchArray.forEach(item => APIRequest.push(item.name)); // Extract each name and push to array

		// // Send information to Spoonacular API
		// const searchString = APIRequest.join().toLowerCase();
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

		// // Add the API response to the app's state
		// request(options, function (error, response, body) {
		// 	if (error) throw new Error(error);
		//   const res = JSON.parse(body);
		// 	console.log('Parsed response: ', res);
		// 	APIResponse = [...res];
		// 	return modifyAPI({...APIState, response: [...APIResponse]}); 
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
		return modifyAPI({...APIState, response: [...res]}); 
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
			APIState,
			modifyAPI,
			recipeInfo,
			getRecipeByID,
			setRecipeInfo
			}}
		>
			{children}
		</FoodContext.Provider>
	)
}
