import React, { useRef, useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Addfood({updateInput, category}) {
	const globalState = useContext(FoodContext);

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
