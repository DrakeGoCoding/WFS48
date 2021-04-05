import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Main from './Main.js'
import PostCreator from './PostCreator.js'

export default function Navigation() {
    const [editPost, setEditPost] = useState(null);

    return (
        <Router>
            <Route exact path="/">
                <Main setEditPost={setEditPost} />
            </Route>

            <Route path="/post-creator">
                <PostCreator editPost={editPost} />
            </Route>
        </Router>
    )
}
