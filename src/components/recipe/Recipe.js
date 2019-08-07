import React, { useContext, useEffect } from 'react';
import FoodContext from '../../context/FoodContext';


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

	// When navigating away from this page, clear the recipe from globalState
	useEffect(() => {
		return function cleanup() {
			return globalState.setRecipeInfo({})
		}
	})

	let ingredients 
	if (extendedIngredients) {
		ingredients = extendedIngredients.map(ingredient => 
			<li>{ingredient.originalString}</li>
		)
	} else ingredients = <li>Loading ingredients...</li>

	return (
		<div className="recipe">
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
					<p>{instructions}</p>
				</div>
		</div>
	)
}
