import React, { useContext } from 'react';
import {foodStateContext} from '../App';

export default function Deletefood() {
	const data = useContext(foodStateContext);
	return (
		<span onClick={data}><i className="fas fa-times"></i></span>
	)
}
