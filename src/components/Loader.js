import React from 'react'
var Spinner = require('react-spinkit');

export default function Loader() {
	return (
		<React.Fragment>
			<Spinner name="circle" fadeIn='none' />
			<h3>Loading...</h3>
		</React.Fragment>
	)
}
