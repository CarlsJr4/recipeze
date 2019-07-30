import React from 'react';
import Foodcard from './Foodcard';
import Search from './Search';


export default function Builder({foodList, updateFood}) {	
	return (
		<div>
				<h1>MealBuilder</h1>
				<h3>Pick foods from at least 3 categories</h3>
				<div className="categories">
					<Foodcard 
						title="Protein" 
						icon="drumstick-bite" 
						contents={foodList.proteins}
					/>
					<Foodcard 
						title="Grains" 
						icon="bread-slice" 
						contents={foodList.grains}
					/>
					<Foodcard 
						title="Veggies"
						icon="carrot"
						contents={foodList.veggies}
					/>
					<Foodcard 
						title="Custom"
						icon="utensils"
						contents={foodList.custom}
					/>
					<Search />
				</div>
		</div>
	)
}
