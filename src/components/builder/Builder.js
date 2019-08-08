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
				<h1>Meal Builder</h1>
				<details>
					<summary><strong>How to use:</strong></summary>
					<p>1. Click ingredients to select them.</p>
					<p>2. Click the arrow button to search for meals containing your selected ingredients.</p>
					<hr></hr>
					<p>You can manage your ingredients by interacting with the ingredient cards.</p>
					<p>All of your ingredients will be saved to your browser's local storage for future access.</p>
				</details>
				<br />
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
