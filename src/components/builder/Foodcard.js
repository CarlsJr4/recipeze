import React from 'react';
import Addfood from './Addfood';

export default function Foodcard({title, contents, icon}) {
	const foodContents = contents.map((item) => 
		<li>{item}</li>
	);

	return (
		<div className={`foodCard foodCard--${title}`}>
			<h3>{title} <i className={`fas fa-${icon}`}></i></h3>
			<ul>
				{foodContents}
			</ul>
			<Addfood />
		</div>
	)
}