import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Main from './Main'
import SignIn from './SignIn';
import SignUp from './SignUp'

export default function Navigation() {
    const [token, setToken] = useState('');

    const loginSuccess = (token) => {
        setToken(token);
        localStorage.setItem('accessToken', token)
    }

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
                            <Main setToken={setToken}></Main>
                        </Route>
                    </>
            }

        </Router >
    )
}