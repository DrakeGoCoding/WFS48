import React from "react";
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
} from "react-router-dom";
import Topic from "./Topic";

export default function TopicList() {
	let match = useRouteMatch();

	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props V State</Link>
				</li>
			</ul>

			<Switch>
				<Route path={`${match.path}/:topicId`} component={Topic} />
				<Route path={match.path}>
					<h3>Please select a topic.</h3>
				</Route>
			</Switch>
		</div>
	);
}
