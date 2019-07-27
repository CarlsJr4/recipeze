import React from 'react';

export default function Cardcontainer({children, contents}) {
	const foodContents = contents.map((item) => 
		<li>{item}</li>
	);

	return (
		<div>
			<h3>{children}</h3>
			<ul>
				{foodContents}
			</ul>
		</div>
	)
}