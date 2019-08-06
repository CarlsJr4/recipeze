import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import Resultcard from './Resultcard';
import Backbutton from './Backbutton';

export default function Results() {
	const globalState = useContext(FoodContext);
	const response = globalState.APIState.response;

	const results = response.map((response) =>
		<Resultcard title={response.title} img={response.image} alt={response.title} />
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
