const reducer = (state, {type, id, category}) => {
	switch (type) {
		case 'remove_food':
			// Copy the state object
			const modifiedState = Object.assign({}, state);
			// Copy the array of the category of food to modify 
			const stateCategory = [...modifiedState[category]]; 
			// Filter the array
			const filteredCategory = stateCategory.filter(ingredient => 
				ingredient.id !== id
			)
			// Assign new array to modified state
			modifiedState[category] = filteredCategory; 
			// Update state
			return modifiedState; 
		default: throw new Error()
	}
}


export default reducer;