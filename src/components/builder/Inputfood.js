import React, { useRef, useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Inputfood({category, handleClick, handleChange, handleBlur}) {
	const globalState = useContext(FoodContext);

	const inputBox = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		handleChange({inputValue: ''}); // Reset internal state
		const addedFood = inputBox.current.value;
		if (!addedFood.length) {
			alert('You cannot submit a blank food item');
			return
		}
		inputBox.current.value = ''; // Reset input box
		globalState.addFood(addedFood, category);
	}

	return (
		<form onSubmit={handleSubmit} name="foodCardBottom">
			<input 
				ref={inputBox}
				onBlur={() => handleBlur(false) } // Sets inputEnabled to false for better UX
				onChange={() => handleChange({inputValue: inputBox.current.value})} 
				type="text"
				autoFocus
				placeholder="..." 
			/>
			<button 
				type="button" 
				name="cancelAdd" 
				onClick={() => handleClick(false)} // Sets inputEnabled state to false
			>
				<i className="fas fa-times"></i>
			</button>
		</form>
	)
}
