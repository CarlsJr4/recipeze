// Should we refactor to use functions to preserve namespaces?
// We should also refactor the second argument of reducer to just be 'action' to make the functions more specific
// Reducer breaks when we move the function to global?

// Next goal: Refactor this page. Make it cleaner, more readable, and more scalable.
const uuidv4 = require('uuid/v4');

function removeFood(state, category, id) {	
	const modifiedState = Object.assign({}, state);  // Copy the state object
	const stateCategory = [...modifiedState[category]];  // Copy the array of the category of food to modify 
	const filteredCategory = stateCategory.filter(ingredient => // Filter the array
		ingredient.id !== id
	)
	// Assign new array to modified state
	modifiedState[category] = filteredCategory; 
	// Update state
	return modifiedState; 
}

function addFood(state, category, inputValue) {
	const modifiedState = Object.assign({}, state); // Copy of object
	const stateCategory = [...modifiedState[category]]; // Array of category
	stateCategory.push({ // Push to array
		name: inputValue,
		id: uuidv4()
	})
	modifiedState[category] = stateCategory;
	return modifiedState;
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'remove_food':
			return removeFood(state, action.category, action.id);
		case 'add_food':
			return addFood(state, action.category, action.inputValue)
		default: throw new Error()
	}
}


export default reducer;