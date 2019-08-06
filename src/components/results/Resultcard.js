import React from 'react';
import Likebutton from './Likebutton';
import { Link } from 'react-router-dom';

export default function Resultcard({title, img}) {
	return (
		<Link to="/recipe">
			<div className="resultCard">
				<img src={img} alt="recipe placeholder" />
				<div className="resultCard__title">
					<Likebutton />
					<h3>{title}</h3>
				</div>
			</div>
		</Link>
	)
}
