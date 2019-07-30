import React from 'react'

export default function Addfood() {
	// Goal: Text input must only render if plus button is clicked and state is true
	// Clicking plus button updates state, submitting also updates state and resets form

	return (
		<form>
			<input type="text" placeholder="..." />
			<button name="add"><i class="fas fa-plus"></i></button>
		</form>
	)
}
