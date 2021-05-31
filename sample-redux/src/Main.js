import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_NAME, DECREMENT, INCREMENT } from "./actions/type";

export default function Main() {
	const dispath = useDispatch();
	const counterReducer = useSelector((state) => state.counterReducer);
	const nameReducer = useSelector((state) => state.nameReducer);
	const [name, setName] = useState("");

	const changeName = (e) => {
		setName(e.target.value);
	};

	const addName = () => dispath({ type: ADD_NAME, payload: name });
	const increaseCounter = () => dispath({ type: INCREMENT });
	const decreaseCounter = () => dispath({ type: DECREMENT });

	return (
		<div>
			<p>Reducer counter: {counterReducer.counter}</p>
			<button onClick={increaseCounter}>Up</button>
			<button onClick={decreaseCounter}>Down</button>
			<p>Reducer name: {nameReducer.listName.toString()}</p>
			<input value={name} onChange={changeName} />
			<button onClick={addName}>Add name</button> <br />
			<br />
			<Link to="/about">About</Link> <br />
			<Link to="/upload">Upload File</Link> <br />
			<Link to="/topics">Topic List</Link>
		</div>
	);
}
