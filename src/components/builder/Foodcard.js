import React, { useState, useContext } from 'react';
import Foodform from './Foodform';
import FoodContext from '../../context/FoodContext';
import Deletefood from './Deletefood';


export default function Foodcard({title, contents, icon, category}) {
	const [_, setStateInput] = useState({inputValue: ''}); // This hook is just here to make a controlled component
	const globalState = useContext(FoodContext);

	// Function to toggle the appearance of the list item when clicked
	function toggleAppearance(id) {
		const label = document.querySelector(`label[for="${id}"]`);
		label.classList.toggle('checked');
	}

	function sendItemToState(state, id, name) {
		const checkBox = document.querySelector(`input[id="${id}"]`);
		if (checkBox.checked) {
			const foodInfo = {name, id} // Set up an object to push to the array, incase we need to delete by ID
			return [...state, foodInfo]
		} else {
			const stateCopy = [...state];
			const searchState = stateCopy.filter(item => item.id !== id);
			return [...searchState]
		}
	}

	// This section is the contents of each card
	const foodContents = contents.map((item) => {
		return (
				<React.Fragment key={item.id}>
					<input 
						id={item.id} 
						type="checkbox" 
						value={item.name}
						// This event listener is equivalent to {() => updateSearchQuery([...searchQueryState, name])}
						onClick={() => globalState.selectFood(sendItemToState(globalState.searchQueryState, item.id, item.name))}
					/>
					<label 
						onClick={() => toggleAppearance(item.id)}
						htmlFor={item.id}
					>
						<span>
							{item.name}
						</span>
						<Deletefood 
							id={item.id}
							category={category}
						/>
					</label>
				</React.Fragment>
			)
		}
	);

	return (
		<div className={`foodCard foodCard--${title}`}>
			<h3>{title} <i className={`fas fa-${icon}`}></i></h3>
			<form name="foodCardInputs">
				{foodContents}
			</form>
			<Foodform 
				handleChange={setStateInput} 
				category={category}
			/>
		</div>
	)
}