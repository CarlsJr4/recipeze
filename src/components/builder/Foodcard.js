import React, { useState } from 'react';
import Addfood from './Addfood';
import Deletefood from './Deletefood';
import reducer from '../../context/reducers';

export default function Foodcard({title, contents, icon, category}) {
	// Internal state for each card
	// Will we have different hooks for the input value and form submission?
	const [inputState, setStateInput] = useState({inputValue: ''});

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
			<Addfood updateInput={setStateInput} category={category} />
		</div>
	)
}