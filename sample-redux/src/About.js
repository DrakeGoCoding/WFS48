import React from "react";
import { useSelector } from "react-redux";

export default function About() {
	const counterReducer = useSelector((state) => state.counterReducer);
	const nameReducer = useSelector((state) => state.nameReducer);
	return (
		<div>
			<h1>About</h1>
			<p>Counter: {counterReducer.counter}</p>
			<p>List name: {nameReducer.listName.toString()}</p>
		</div>
	);
}
