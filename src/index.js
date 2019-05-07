import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import initialCards from "./base.json";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const VISIBILITY_ALL = "all";
const VISIBILITY_CAUGHT = "caught";
const VISIBILITY_UNCAUGHT = "uncaught";

const initialState = {
	...initialCards,
	visibilityFilter: VISIBILITY_ALL
};

const ACTION_CATCH = "catch";

function catchCard(id) {
	return {
		type: ACTION_CATCH,
		payload: {
			id
		}
	};
}
const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

function cards(state = initialState.cards, action = { type: "" }) {
	switch (action.type) {
		case ACTION_CATCH:
			const newState = state.map(card => {
				if (card.id === action.payload.id) {
					return {
						...card,
						isCaught: true
					};
				} else {
					return card;
				}
			});

			return newState;
		// set the card to "caught"

		default:
			return state;
	}
}

function visibility(state = "NOPE", action = { type: "" }) {
	switch (action.type) {
		case ACTION_VISIBILITY_ALL:
			return VISIBILITY_ALL;

		case ACTION_VISIBILITY_CAUGHT:
			return VISIBILITY_CAUGHT;

		case ACTION_VISIBILITY_UNCAUGHT:
			return VISIBILITY_UNCAUGHT;

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	cards: cards,
	visibilityFilter: visibility
});

const store = createStore(rootReducer);

window.catchCard = catchCard;

function setVisibilityAll() {
	return {
		type: ACTION_VISIBILITY_ALL
	};
}

function setVisibilityCaught() {
	return {
		type: ACTION_VISIBILITY_CAUGHT
	};
}
function setVisibilityUncaught() {
	return {
		type: ACTION_VISIBILITY_UNCAUGHT
	};
}

window.store = store;
window.setVisibilityAll = setVisibilityAll;
window.setVisibilityCaught = setVisibilityCaught;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
serviceWorker.unregister();
