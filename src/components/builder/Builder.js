import React from 'react';
import Foodcard from './Foodcard';
import Search from './Search';


const foods = [
	{
		type: 'Protein',
		icon: 'fas fa-drumstick-bite',
		contents: ['Beef', 'Chicken', 'Pork', 'Tofu']
	},
	{
		type: 'Grains',
		icon: 'fas fa-bread-slice',
		contents: ['White rice', 'Brown rice']
	},
	{
		type: 'Veggies',
		icon: 'fas fa-carrot',
		contents: ['Broccoli', 'Spinach', 'Brussels Sprouts']
	},
	{
		type: 'Other',
		icon: 'fas fa-utensils',
		contents: ['Nuts']
	}
]

export default function Builder() {

	const foodCards = foods.map((food) => 
		<Foodcard contents={food.contents} icon={food.icon}>
			{food.type}
		</Foodcard>
	)
	
	return (
		<div>
				<h1>MealBuilder</h1>
				<h3>Pick foods from at least 3 categories</h3>
				<div className="categories">
					{foodCards}
					<Search />
				</div>
		</div>
	)
}
