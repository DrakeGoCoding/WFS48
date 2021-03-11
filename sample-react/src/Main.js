import React, { Component } from 'react'
import Login from './Login.js'

export default class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <p>Hello World</p>
                <Login></Login>
            </div>
        )
    }
}
