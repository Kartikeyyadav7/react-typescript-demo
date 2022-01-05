import React, { useReducer } from "react";

type countState = {
	count: number;
};

type updateAction = {
	type: "increment" | "decrement";
	payload: number;
};

type resetAction = {
	type: "reset";
};

type countAction = updateAction | resetAction;

const reducer = (state: countState, action: countAction) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + action.payload };
		case "decrement":
			return { ...state, count: state.count - action.payload };
		case "reset":
			return initialState;

		default:
			return state;
	}
};

const initialState = {
	count: 0,
};

const Count = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => {
		dispatch({ type: "increment", payload: 10 });
	};

	const decrement = () => {
		dispatch({ type: "decrement", payload: 10 });
	};

	const reset = () => {
		dispatch({ type: "reset" });
	};

	return (
		<div>
			<button onClick={increment}>+10</button>
			{state.count}
			<button onClick={decrement}>-10</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Count;
