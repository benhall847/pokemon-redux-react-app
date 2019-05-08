import React from "react";

export default function VisibilityButton({ handleClick, label }) {
	return <button onClick={handleClick()}>{label}</button>;
}
