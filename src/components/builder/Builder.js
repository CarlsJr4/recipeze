import React, { useContext } from 'react';
import Foodcard from './Foodcard';
import Search from './Search';
import FoodContext from '../../context/FoodContext';


export default function Builder() {	
	const globalState = useContext(FoodContext);
	return (
		<div>
				<h1>MealBuilder</h1>
				<h3>Pick foods from at least 3 categories</h3>
				<div className="categories">
					<Foodcard 
						title="Protein" 
						icon="drumstick-bite" 
						contents={globalState.ingredients.proteins}
					/>
					<Foodcard 
						title="Grains" 
						icon="bread-slice" 
						contents={globalState.ingredients.grains}
					/>
					<Foodcard 
						title="Veggies"
						icon="carrot"
						contents={globalState.ingredients.veggies}
					/>
					<Foodcard 
						title="Custom"
						icon="utensils"
						contents={globalState.ingredients.custom}
					/>
					<Search />
				</div>
		</div>
	)
}
