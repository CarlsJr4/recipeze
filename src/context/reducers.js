// Should we refactor to use functions to preserve namespaces?
const uuidv4 = require('uuid/v4')

const reducer = (state, {type, id, category, inputValue}) => {
	switch (type) {

		case 'remove_food':
			const modifiedState = Object.assign({}, state);  // Copy the state object
			const stateCategory = [...modifiedState[category]];  // Copy the array of the category of food to modify 
			const filteredCategory = stateCategory.filter(ingredient => // Filter the array
				ingredient.id !== id
			)
			// Assign new array to modified state
			modifiedState[category] = filteredCategory; 
			// Update state
			return modifiedState; 

		case 'add_food':
				const inputState = Object.assign({}, state); // Copy of object
				const inputStateCategory = [...inputState[category]]; // Array of category
				inputStateCategory.push({ // Push to array
					name: inputValue,
					id: uuidv4()
				})
				inputState[category] = inputStateCategory;
				return inputState;

		default: throw new Error()
	}
}


export default reducer;