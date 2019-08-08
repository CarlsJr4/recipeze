import React from 'react';
import { Link } from 'react-router-dom';

export default function Homebutton() {
	return (
		<Link to="/">
			<button className="button--inverse" title="Back to home page"><i class="fas fa-home"></i></button>
		</Link>
	)
}
