import React, { useState } from 'react';
import Inputfood from './Inputfood';
import Addfood from './Addfood';

export default function Foodform({handleChange}) {
	const [inputEnabled, toggleInputState] = useState(false);
	if (inputEnabled) {
		// with inputEnabled set to true, Inputfood is enabled. 
		// Inputfood should set inputEnabled to false
		return <Inputfood handleClick={toggleInputState} handleChange={handleChange} />
	}
	return <Addfood handleClick={toggleInputState} />
}
