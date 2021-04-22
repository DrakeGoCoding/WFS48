import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import LoginScreen from './LoginScreen'
import SchoolViewer from './SchoolViewer'
import SchoolCreator from './SchoolCreator'
import StudentViewer from './StudentViewer'
import StudentCreator from './StudentCreator'
import Main from './Main'

export default function Navigation() {
    const [token, setToken] = useState('')

    const login = token => {
        setToken(token)
        localStorage.setItem(TOKEN_STORAGE, token)
    }

    useEffect(() => {
        let token = localStorage.getItem(TOKEN_STORAGE)
        setToken(token)
    }, [])

    return (
        <Router>
            {
                !token
                    ?
                    <LoginScreen setToken={login} />
                    : <>
                        <Route exact path="/" component={Main} />
                        <Route path="/school-viewer" component={SchoolViewer} />
                        <Route path="/school-viewer/create" component={SchoolCreator} />
                        <Route path="/student-viewer" component={StudentViewer} />
                        <Route path="/student-viewer/create" component={StudentCreator} />
                        <Route path="/student-viewer/edit/:id" component={StudentCreator} />
                    </>
            }
        </Router>
    )
}

const TOKEN_STORAGE = 'accessToken'