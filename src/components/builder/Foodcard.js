import React from 'react';
import Addfood from './Addfood';
import Deletefood from './Deletefood';
const uuidv4 = require('uuid/v4');


export default function Foodcard({title, contents, icon}) {

	function toggleCheck(id) {
		const label = document.querySelector(`label[for="${id}"]`);
		label.classList.toggle('checked');
	}

	// Assign each foodcard a label and invisible checkbox to send information to API
	const foodContents = contents.map((item) => {
		const labelId = uuidv4();
		return (
				<>
					<input id={labelId} type="checkbox" value={item}/>
					<label onClick={() => toggleCheck(labelId)} htmlFor={labelId}>
						<span>{item}</span>
						<Deletefood foodID={labelId} />
					</label>
				</>
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