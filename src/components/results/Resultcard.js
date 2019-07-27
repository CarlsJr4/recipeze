import React from 'react';

export default function Resultcard({title, img}) {
	return (
		<div>
			<img src={img} alt="recipe placeholder" />
			<h3>{title}</h3>
		</div>
	)
}
