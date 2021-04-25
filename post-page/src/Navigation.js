import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Main from './Main.js'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PostCreator from './PostCreator.js'
import jwt_decode from 'jwt-decode'
import { getUserByID } from './Axios.js'

export default function Navigation() {
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    const loginSuccess = (token) => {
        setToken(token);
        localStorage.setItem('accessToken', token)
    }

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        if (token) {
            try {
                const userID = jwt_decode(token)._id
                getUserByID(userID).then(res => {
                    const user = res.data;
                    setUserName(user.name)
                    setToken(token)
                })
            } catch (error) {
                setToken('')
            }
        }
    }, [token])

    return (
        <Router>
            {
                !token
                    ?
                    <Route exact path="/">
                        <SignIn setToken={loginSuccess}></SignIn>
                    </Route>
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
