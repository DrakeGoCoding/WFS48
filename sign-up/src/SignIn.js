import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordShown: false,
            alertMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.checkEmail())
            this.setAlertMessage('Email does not exist');
        else if (!this.checkPassword())
            this.setAlertMessage('Incorrect password');
        else {
            this.setAlertMessage('');
            console.log(this.state);
            alert("Sign in successfully!");
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value })
    }

    togglePasswordVisibility() {
        this.setState({
            passwordShown: !this.state.passwordShown ? true : false
        })
    }

    /**
     * 
     * @param {String} email 
     */
    checkEmail() {
        const email = this.state.email;
        return email.match('web48@mindx.edu.vn');
    }

    /**
     * 
     * @param {String} password 
     */
    checkPassword() {
        const password = this.state.password;
        return password.match('123123');
    }

    /**
     * 
     * @param {String} message 
     */
    setAlertMessage(message) {
        this.setState({
            alertMessage: message
        })
    }

    render() {
        return (
            <div className="signin-container">
                <form className="signin-form flexColumn" onSubmit={this.handleSubmit} spellCheck="false" autoComplete="off">
                    <h1 id="signin-title">SIGN IN</h1>

                    <label>
                        <input
                            className="signin-input"
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Your Email"
                            onChange={this.handleInputChange}
                            required />
                    </label>

                    <label className="signin-password">
                        <input
                            className="signin-input"
                            name="password"
                            type={this.state.passwordShown ? 'text' : 'password'}
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            required />
                        <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={this.togglePasswordVisibility} />
                    </label>

                    <div className="signin-alert">{this.state.alertMessage}</div>

                    <input className="signin-submit" type="submit" value="SIGN IN" />

                    <div className="signup-redirect">
                        Have not owned an account yet?
                        <button id="redirect-signup">Create New Account</button>
                    </div>
                </form>
            </div>
        )
    }
}
