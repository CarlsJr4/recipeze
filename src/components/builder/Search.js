import React from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
	return (
		<Link to="/results">
			<button type="submit"><i class="fas fa-arrow-right"></i></button>
		</Link>
	)
}
