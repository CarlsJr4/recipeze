import React, { useContext, useState, useEffect } from 'react';
import FoodContext from '../../context/FoodContext';
import Resultcard from './Resultcard';
import Backbutton from './Backbutton';

export default function Results() {
	const globalState = useContext(FoodContext);
	const response = globalState.APIState.response;
	const [foodTitles, updateFoodTitles] = useState([]);

	// When this component loads, insert food titles into results description
	useEffect(() => {
		const foodStringArray = [];
		const searchTerms = globalState.APIState.searchTerms; 
		searchTerms.forEach(term => foodStringArray.push(term.name)); 
		const foodTitles = foodStringArray.join(', ');
		return updateFoodTitles(foodTitles) 
	}, [])

	// API Response results are processed here
	const results = response.map(({title, image, id}) =>
		<Resultcard id={id} title={title} img={image} alt={title} />
	)

	return (
		<div>
			<div className="resultsTitle">
				<Backbutton />
				<h1>Meal Builder</h1>
			</div>
			<h3>Found {response.length} result{(response.length === 1 ? '' : 's')} for meals including: {foodTitles}</h3>
			<div className="resultsContainer">
				{results}
			</div>
		</div>
	)
}
