import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main from './Main.js'
import Pokemon from './Pokemon.js'

export default function Navigation() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/pokemon">
                    <Pokemon />
                </Route>
            </Switch>
        </Router>
    );
}

function About() {
    return <div>About page</div>
}