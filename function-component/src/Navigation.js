import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main from './Main.js'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

function About() {
    return <div>About page</div>
}