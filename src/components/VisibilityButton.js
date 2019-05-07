import React from "react";

export default function VisibilityButton({ handleClick, label }) {
	return (
		<button
			onClick={e => {
				handleClick(e.target.value);
			}}
			value={label}
		>
			{label}
		</button>
	);
}
