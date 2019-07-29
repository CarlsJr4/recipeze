import React from 'react'

export default function Recipe() {
	return (
		<div className="recipe">
			<h1>Blueberry Pancakes</h1>

			<div className="recipe__summary">
				<img src="https://picsum.photos/200" alt="Recipe name" />
				<div className="recipe__ingredients">
					<h3>Prep Time: 10 min</h3>
					<h3>Ingredients:</h3>
					<ul>
						<li>Flour</li>
						<li>Egg</li>
						<li>Blueberries</li>
						<li>Sugar</li>
						<li>Butter</li>
					</ul>
				</div>
			</div>

				<div className="recipe__instructions">
					<h3>Instructions:</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
						 odit. Beatae impedit reprehenderit alias minima animi eligendi optio, 
						 eveniet repellat necessitatibus libero, incidunt assumenda eos tempore
						  reiciendis! Voluptatibus, ipsum fuga!
					</p>
				</div>
		</div>
	)
}
