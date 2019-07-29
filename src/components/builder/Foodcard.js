import React from 'react';
import Addfood from './Addfood';

const uuidv4 = require('uuid/v4');

// We need each label to correspond to a unique ID
// For each content, return a label with ID and checkbox corresponding to that ID
export default function Foodcard({title, contents, icon}) {
	const foodContents = contents.map((item) => {
		const labelId = uuidv4();
		return <React.Fragment>
				<input id={labelId} type="checkbox" value={item} />
				<label htmlFor={labelId}>{item}</label>
			</React.Fragment>
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