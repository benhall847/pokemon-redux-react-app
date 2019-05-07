import React from "react";

export default function PokeList({ cards }) {
	const cardItems = cards.map(card => {
		return <li>{card.name}</li>;
	});

	return <ul>{cardItems}</ul>;
}
