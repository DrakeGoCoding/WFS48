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
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    const loginSuccess = (token, userName) => {
        setToken(token);
        setUserName(userName);
        localStorage.setItem('currentUser', userName)
        localStorage.setItem('accessToken', token)
    }

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        let currentUser = localStorage.getItem('currentUser')
        setToken(token)
        setUserName(currentUser)
    }, [])

    return (
        <Router>
            {
                !token
                    ? <SignIn setToken={loginSuccess}></SignIn>
                    : <>
                        <Route exact path="/">
                            <Main setToken={setToken} userName={userName} />
                        </Route>
                        <Route path="/post-creator" component={PostCreator} />
                        <Route path="/post-editor/:id" component={PostCreator} />
                    </>
            }
            <Route path="/SignUp" component={SignUp} />
        </Router>
    )
}
