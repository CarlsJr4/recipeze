import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

export default function Search() {
	const globalState = useContext(FoodContext);
	return (
		<Link to="/results">
			<button 
				className="button--inverse"
				title="Search for foods"
				onClick={globalState.sendAPIRequest}
				type="submit">
					<i className="fas fa-arrow-right"></i>
			</button>
		</Link>
	)
}
