import React from 'react';
import Foodcard from './Foodcard';
import Search from './Search';

const foods = [
	{
		type: 'Protein',
		contents: ['Beef', 'Chicken', 'Pork', 'Tofu']
	},
	{
		type: 'Grains',
		contents: ['White rice', 'Brown rice']
	},
	{
		type: 'Veggies',
		contents: ['Broccoli', 'Spinach', 'Brussels Sprouts']
	},
	{
		type: 'Other',
		contents: ['Nuts']
	}
]

export default function Builder() {

	const foodCards = foods.map((food) => 
		<Foodcard contents={food.contents}>
			{food.type}
		</Foodcard>
	)
	
	return (
		<div>
				<h1>MealBuilder</h1>
				<h3>Pick foods from at least 3 categories</h3>
				<div className="category">
					{foodCards}
					<Search />
				</div>
		</div>
	)
}
