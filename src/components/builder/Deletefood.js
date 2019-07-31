import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function Deletefood() {
	const data = useContext(FoodContext);
	return (
		<span onClick={data}><i className="fas fa-times"></i></span>
	)
}
