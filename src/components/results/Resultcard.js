import React from 'react';
import Likebutton from './Likebutton';

export default function Resultcard({title, img}) {
	return (
		<div className="resultCard">
			<img src="https://picsum.photos/200" alt="recipe placeholder" />
			<div className="resultCard__title">
				<Likebutton />
				<h3>{title}</h3>
			</div>
		</div>
	)
}
