import React from 'react';
import Foodcard from './Foodcard';
import Search from './Search';


const foods = [
	{
		proteins: ['Beef', 'Chicken', 'Pork', 'Tofu']
	},
	{
		grains: ['White rice', 'Brown rice']
	},
	{
		veggies: ['Broccoli', 'Spinach', 'Brussels Sprouts']
	},
	{
		custom: ['Nuts']
	}
]

export default function Builder() {	
	return (
		<div>
				<h1>MealBuilder</h1>
				<h3>Pick foods from at least 3 categories</h3>
				<div className="categories">
					<Foodcard title="Protein" icon="drumstick-bite" contents={foods[0].proteins}/>
					<Foodcard title="Grains" icon="bread-slice" contents={foods[1].grains}/>
					<Foodcard title="Veggies" icon="carrot" contents={foods[2].veggies}/>
					<Foodcard title="Custom" icon="utensils" contents={foods[3].custom}/>
					<Search />
				</div>
		</div>
	)
}
