import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Main from './Main.js'
import PostCreator from './PostCreator.js'

export default function Navigation() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/post-creator">
                    <PostCreator />
                </Route>
            </Switch>
        </Router>
    )
}
