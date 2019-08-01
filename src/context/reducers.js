// Should we refactor to use functions to preserve namespaces?
// We should also refactor the second argument of reducer to just be 'action' to make the functions more specific

// Next goal: Refactor this page. Make it cleaner, more readable, and more scalable.
const uuidv4 = require('uuid/v4');

// {type, id, category, inputValue}
const reducer = (state, action) => {
	switch (action.type) {

		case 'remove_food':
			const modifiedState = Object.assign({}, state);  // Copy the state object
			const stateCategory = [...modifiedState[action.category]];  // Copy the array of the category of food to modify 
			const filteredCategory = stateCategory.filter(ingredient => // Filter the array
				ingredient.id !== action.id
			)
			// Assign new array to modified state
			modifiedState[action.category] = filteredCategory; 
			// Update state
			return modifiedState; 

		case 'add_food':
				const inputState = Object.assign({}, state); // Copy of object
				const inputStateCategory = [...inputState[action.category]]; // Array of category
				inputStateCategory.push({ // Push to array
					name: action.inputValue,
					id: uuidv4()
				})
				inputState[action.category] = inputStateCategory;
				return inputState;

		default: throw new Error()
	}
}


export default reducer;