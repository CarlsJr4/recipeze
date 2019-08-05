import React, { useEffect, useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import Resultcard from './Resultcard';
import Backbutton from './Backbutton';

// This response is modeled after the Spoonacular API demo

export default function Results() {
	const globalState = useContext(FoodContext);
	const searchState = globalState.searchQueryState;
	const updateSearch = globalState.updateSearchArray
	const response = globalState.APIResponse;

	useEffect(() => {
		console.log('foo')
		return updateSearch
	}, [searchState]) // Clear the API response as a cleanup effect

	const results = response.map((response) =>
		<Resultcard title={response.title} img={response.img} />
	)

	return (
		<div>
			<div className="resultsTitle">
				<Backbutton />
				<h1>Meal Builder</h1>
			</div>
			<h3>Found 5 results for meals including: beef, brown rice, broccoli</h3>
			<div className="resultsContainer">
				{results}
			</div>
		</div>
	)
}
