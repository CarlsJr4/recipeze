import React from 'react';
// Figure out how to position the button the way we want

export default function Addfood({handleClick}) {
	return (
		// We only surround this button in form tags so we can easily apply the style to it. We should refactor this later.
		<form name="foodCardBottom">
			<button type="button" name="Add" onClick={() => handleClick(true)}>
				<i className="fas fa-plus"></i>
			</button>
		</form>
	)
}
