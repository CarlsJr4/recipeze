import React from 'react';
import Likebutton from './Likebutton';

export default function Resultcard({title, img}) {
	return (
		<div className="resultCard">
			<img src="https://picsum.photos/200" alt="recipe placeholder" />
			<Likebutton />
			<div className="resultCard__title">
				<h3>{title}</h3>
			</div>
		</div>
	)
}
