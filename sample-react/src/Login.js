import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            remember: false,
            alertStyle: {
                display: 'none'
            }
        }
    }

    render() {
        return (
            <div>
                <form id='login-form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        let { userName, password, remember } = this.state;

                        userName === 'web48' && password === '123123' ?
                            this.setState({
                                alertStyle: {
                                    display: 'none'
                                }
                            })
                            :
                            this.setState({
                                alertStyle: {
                                    color: 'red',
                                    display: 'block'
                                }
                            })


                        if (!remember) {
                            this.setState({
                                userName: '',
                                password: ''
                            })
                        }
                    }}>
                    <input type='text' placeholder='User name' value={this.state.userName}
                        onChange={(e) => {
                            this.setState({
                                userName: e.target.value
                            })
                        }}
                    /> <br />
                    <input type='password' placeholder='Password' value={this.state.password}
                        onChange={(e) => {
                            this.setState({
                                password: e.target.value
                            })
                        }}
                    /> <br />
                    <input type='checkbox' value={this.state.remember}
                        onChange={(e) => {
                            this.setState({
                                remember: e.target.checked
                            })
                        }}
                    /> Remember me? <br />
                    <div className='alert' style={this.state.alertStyle}>Incorrect username or password</div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
