import React from 'react';
import { Link } from 'react-router-dom';

export default function Backbutton() {
	return (
		<Link to="/">
			<button><i className="fas fa-arrow-left"></i></button>
		</Link>
	)
}
