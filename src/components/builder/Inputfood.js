import React, { useRef, useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Inputfood({category, handleClick, handleChange}) {
	const globalState = useContext(FoodContext);

	const inputBox = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		handleChange({inputValue: ''}); // Reset internal state
		const addedFood = inputBox.current.value;
		inputBox.current.value = ''; // Reset input box
		globalState.addFood(addedFood, category);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				ref={inputBox}
				onChange={() => handleChange({inputValue: inputBox.current.value})} 
				type="text"
				autoFocus
				placeholder="..." 
			/>
			<button 
				type="button" 
				name="cancelAdd" 
				onClick={() => handleClick(false)}
			>
				<i className="fas fa-times"></i>
			</button>
		</form>
	)
}
