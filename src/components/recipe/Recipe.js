import React, { useContext, useEffect } from 'react';
import FoodContext from '../../context/FoodContext';
import Loader from '../Loader';


export default function Recipe() {
	const globalState = useContext(FoodContext);
	const {
		servings,
		extendedIngredients,
		title,
		readyInMinutes,
		image,
		instructions,
		analyzedInstructions 
	} = globalState.recipeInfo;

	// Check if ideal instructions format exists, and render them if they do
	let displayedInstructions
	if (analyzedInstructions) {
		const directions = analyzedInstructions[0].steps;
		displayedInstructions = directions.map(step => <p>{step.number}. {step.step}</p>);
	} else {
		displayedInstructions = <p>{instructions}</p>
	}

	// When navigating away from this page, clear the recipe from globalState
	useEffect(() => 
		function cleanup() {
			return globalState.setRecipeInfo({})
		}, []
	)

	let ingredients 
	if (extendedIngredients) {
		ingredients = extendedIngredients.map(ingredient => 
			<li>{ingredient.originalString}</li>
		)
	} else ingredients = <li>Loading ingredients...</li>

	if (Object.getOwnPropertyNames(globalState.recipeInfo).length === 0) {
		return <Loader />
	}

	return (
		<div className="recipe">
			<Loader />
			<h1>{title}</h1>

			<div className="recipe__summary">
				<img src={image} alt={title} />
				<div className="recipe__ingredients">
					<h3>Preparation time: </h3>
						 <p>{readyInMinutes} minutes</p>
					<h3>Number of servings: </h3>
					<p>{servings}</p>
					<h3>Ingredients:</h3>
					<ul>
						{ingredients}
					</ul>
				</div>
			</div>

				<div className="recipe__instructions">
					<h3>Instructions:</h3>
					{displayedInstructions}
				</div>
		</div>
	)
}
