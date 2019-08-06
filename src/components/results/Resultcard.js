import React, {useContext} from 'react';
import Likebutton from './Likebutton';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

export default function Resultcard({title, img, id}) {
	const globalState = useContext(FoodContext)
	// Receive ID prop
	// Onclick, send API Request here using ID
	// Store recipe into state
	// Pass recipe info as a prop
	// Where should the state live? In the recipe itself?
	
	// Another plan:
	// On recipe component load, receive ID, send API request, store data in state, render data
	// When component unloads, clear the state
	
	return (
		<Link to="/recipe">
			<div className="resultCard" onClick={() => globalState.getRecipeByID(id)}>
				<img src={img} alt="recipe placeholder" />
				<div className="resultCard__title">
					<Likebutton />
					<h3>{title}</h3>
				</div>
			</div>
		</Link>
	)
}
