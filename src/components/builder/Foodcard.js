import React from 'react';
import Addfood from './Addfood';

export default function Cardcontainer({children, contents, icon}) {
	const foodContents = contents.map((item) => 
		<li>{item}</li>
	);

	return (
		<div className="foodCard">
			<h3>{children} <i class={icon}></i> </h3>
			<ul>
				{foodContents}
			</ul>
			<Addfood />
		</div>
	)
}