import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';

// Plan:
// 1. Import context

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

	const ingredients = extendedIngredients.map(ingredient => 
		<li>{ingredient.originalString}</li>
		)

	const numberedSteps = extendedIngredients.analyzedInstructions

	// const numberedInstructions = numberedSteps.map(step => 
	// 		<p>{step.number}. {step}</p>
	// 	)

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
