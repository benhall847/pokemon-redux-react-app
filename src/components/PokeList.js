import React from "react";

export default function PokeList({ cards, handleClick }) {
	const cardItems = cards.map(card => {
		return (
			<li
				onClick={() => {
					handleClick(card.id);
				}}
				key={card.id}
			>
				{card.name}
			</li>
		);
	});

	return <ul>{cardItems}</ul>;
}
