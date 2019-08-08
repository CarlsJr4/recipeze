import React, {useContext} from 'react';
// import Likebutton from './Likebutton';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

export default function Resultcard({title, img, id}) {
	const globalState = useContext(FoodContext)
	
	return (
		<Link to="/recipe">
			<div className="resultCard" onClick={() => globalState.getRecipeByID(id)}>
				<img src={img} alt="recipe placeholder" />
				<div className="resultCard__title">
					{/* <Likebutton /> */}
					<h3>{title}</h3>
				</div>
			</div>
		</Link>
	)
}
