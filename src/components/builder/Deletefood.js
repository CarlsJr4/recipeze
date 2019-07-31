import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';

export default function Deletefood({id, category}) {
	const globalState = useContext(FoodContext);
	return (
		<span onClick={() => globalState.removeFood(id, category)}>
			<i className="fas fa-times"></i>
		</span>
	)
}
