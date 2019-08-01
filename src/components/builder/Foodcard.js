import React, { useState } from 'react';
import Inputfood from './Inputfood';
import Deletefood from './Deletefood';

export default function Foodcard({title, contents, icon, category}) {
	// Plan: if state is true, render addFood, if not, render initializeFood
	// We'd need to change the name of Add food to Addbutton or something
	// State will live here because it does not need to be accessed by other components
	 
	const [_, setStateInput] = useState({inputValue: ''}); // This hook is just here to make a controlled component

	// Function to toggle the appearance of the list item when clicked
	function toggleCheck(id) {
		const label = document.querySelector(`label[for="${id}"]`);
		label.classList.toggle('checked');
	}

	// This section is the contents of each card
	const foodContents = contents.map((item) => {
		return (
				<React.Fragment key={item.id}>
					<input 
						id={item.id} 
						type="checkbox" 
						value={item.name}
					/>
					<label 
						onClick={() => toggleCheck(item.id)}
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
			<form>
				{foodContents}
			</form>
			<Inputfood updateInput={setStateInput} category={category} />
		</div>
	)
}