import React from 'react';
import Addfood from './Addfood';
import Deletefood from './Deletefood';


export default function Foodcard({title, contents, icon, category}) {

	function toggleCheck(id) {
		const label = document.querySelector(`label[for="${id}"]`);
		label.classList.toggle('checked');
	}

	// Assign each foodcard a label and invisible checkbox to send information to API
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
							// How can we extract the item's category?
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
			<Addfood />
		</div>
	)
}