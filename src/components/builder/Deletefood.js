import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Deletefood({foodID}) {
	const globalState = useContext(FoodContext);
	return (
		<span onClick={() => globalState.removeFood(foodID)}>
			<i className="fas fa-times"></i>
		</span>
	)
}
