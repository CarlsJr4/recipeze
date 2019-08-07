import React, { useContext, useEffect} from 'react';
import Foodcard from './Foodcard';
import Search from './Search';
import FoodContext from '../../context/FoodContext';


export default function Builder() {	
	const globalState = useContext(FoodContext);
	const modifyAPI = globalState.modifyAPI;
	
	useEffect(() => modifyAPI({searchTerms: [], response: []}), [modifyAPI])

	return (
		<div className="builder">
				<h1>MealBuilder</h1>
				<h3>Pick foods from any desired category.</h3>
				<div className="builder__categories">
					<Foodcard 
						title="Protein" 
						icon="drumstick-bite" 
						category="proteins"
						contents={globalState.ingredients.proteins} // This is an array
					/>
					<Foodcard 
						title="Grains" 
						icon="bread-slice" 
						category="grains"
						contents={globalState.ingredients.grains}
					/>
					<Foodcard 
						title="Veggies"
						icon="carrot"
						category="veggies"
						contents={globalState.ingredients.veggies}
					/>
					<Foodcard 
						title="Custom"
						icon="utensils"
						category="custom"
						contents={globalState.ingredients.custom}
					/>
					<Search />
				</div>
		</div>
	)
}
