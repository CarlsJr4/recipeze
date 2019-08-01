import React, { useRef, useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Addfood({updateInput, category}) {
	// Goal: Text input must only render if plus button is clicked and state is true
	// Clicking plus button updates state, submitting also updates state and resets form

	// The plan: Use a controlled component
	// Each foodcard has a different input box, how will we handle this?
	// What if we put the searchTerm state in each foodCard?

	// The input state does not need to be accessed globally. It can live in the Foodcard component

	// Then, when we submit the query, we can call a function at the highest level with some args
	// We already have the category, so we could append the new food to the correct card
	// Maybe we can call the dispatch function using the search query?

	// The full process:
	// 1. Type stuff into the input box X
	// 2. The individual state in each foodcard is updated with the query X
	// 3. On submit, clear form, take input and category, call top-level function using those args
	// 4. The top-level function will call dispatch with args
	// 5. The reducer will add the new food, along with ID, to the correct array
	const globalState = useContext(FoodContext);

	// Remember to use proptypes!
	const inputBox = useRef(null)

	function handleSubmit(e) {
		e.preventDefault();
		updateInput({inputValue: ''}); // Reset internal state
		const addedFood = inputBox.current.value;
		inputBox.current.value = ''; // Reset input box
		globalState.addFood(addedFood, category);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				ref={inputBox}
				onChange={() => updateInput({inputValue: inputBox.current.value})} 
				type="text"
				placeholder="..." />
			<button name="add">
				<i className="fas fa-plus"></i>
			</button>
		</form>
	)
}
