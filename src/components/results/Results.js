import React from 'react';
import Resultcard from './Resultcard';
import Backbutton from './Backbutton';

// This response is modeled after the Spoonacular API demo
const response = [
	{
		id: 641803,
		title: "Easy & Delish! ~ Apple Crumble",
		image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
		usedIngredientCount: 3,
		missedIngredientCount: 4,
		likes: 1 
	},
	{
		id: 645152,
		title: "Grandma's Apple Crisp",
		image:"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
		usedIngredientCount: 3,
		missedIngredientCount: 6,
		likes: 1
	},
	{
		id: 645152,
		title: "Grandma's Apple Crisp",
		image:"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
		usedIngredientCount: 3,
		missedIngredientCount: 6,
		likes: 1
	}
]

export default function Results() {
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
