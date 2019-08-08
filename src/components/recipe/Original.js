import React from 'react'

export default function Original({link}) {
	return (
		<a href={link} target="_blank">
			<button 
			className="button--inverse"
			title="Link to original recipe"
			>
				<i class="fas fa-link"></i>
			</button>
		</a>
	)
}
