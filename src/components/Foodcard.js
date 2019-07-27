import React from 'react';
import Addfood from './Addfood';

export default function Cardcontainer({children, contents}) {
	const foodContents = contents.map((item) => 
		<li>{item}</li>
	);

	return (
		<div className="foodCard">
			<h3>{children}</h3>
			<ul>
				{foodContents}
			</ul>
			<Addfood />
		</div>
	)
}