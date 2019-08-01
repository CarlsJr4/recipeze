import React, { useState } from 'react';
import Inputfood from './Inputfood';
import Addfood from './Addfood';

export default function Foodform({handleChange, category}) {
	const [inputEnabled, toggleInputState] = useState(false);
	if (inputEnabled) {
		return (
			<Inputfood 
				handleClick={toggleInputState} 
				handleChange={handleChange} 
				category={category} 
			/>
		)
	}
	return (
		<Addfood 
			handleClick={toggleInputState} 
		/>
	)
}
