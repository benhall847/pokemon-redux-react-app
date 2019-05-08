import React from "react";
import "./App.css";
import PokeList from "./containers/PokeListContainer";
import ButtonAll from "./containers/AllVisibibiltyButton";
import ButtonCaught from "./containers/CaughtButton";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<PokeList />
				<ButtonAll />
				<ButtonCaught />
			</header>
		</div>
	);
}

export default App;
