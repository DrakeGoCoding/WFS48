import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Main from './Main.js'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PostCreator from './PostCreator.js'

export default function Navigation() {
    const [editPost, setEditPost] = useState(null);
    const [token, setToken] = useState('');

    const loginSuccess = (token) => {
        setToken(token);
        localStorage.setItem('accessToken', token)
    }

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        setToken(token)
    }, [])

    return (
        <Router>
            {
                !token
                    ? <>
                        <Route exact path="/">
                            <SignIn setToken={loginSuccess}></SignIn>
                        </Route>
                        <Route path="/SignUp">
                            <SignUp></SignUp>
                        </Route>
                    </>
                    : <>
                        <Route exact path="/">
                            <Main setToken={setToken} setEditPost={setEditPost}></Main>
                        </Route>
                        <Route path="/post-creator">
                            <PostCreator editPost={editPost} />
                        </Route>
                    </>
            }
        </Router>
    )
}
