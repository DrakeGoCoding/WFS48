import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./About";
import Main from "./Main";
import TopicList from "./TopicList";
import Upload from "./Upload";

export default function Navigation() {
	return (
		<Router>
			<Route path="/about" component={About} />
			<Route path="/topics" component={TopicList} />
			<Route path="/upload" component={Upload} />
			<Route exact path="/" component={Main} />
		</Router>
	);
}
