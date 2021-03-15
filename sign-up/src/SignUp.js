import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            passwordShown: false,
            termAgreement: '',
            alertMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.checkName())
            this.setAlertMessage('Your name should be 3-50 characters.');
        else if (!this.checkEmail())
            this.setAlertMessage('Your email should be at most 50 characters.');
        else if (!this.checkPassword())
            this.setAlertMessage('Your password should be at least 6 characters.');
        else if (!this.checkRepeatPassword())
            this.setAlertMessage('Password mismatch');
        else {
            this.setAlertMessage('');
            console.log(this.state);
            alert("Sign up successfully!");
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
     * @param {String} name 
     */
    checkName() {
        const name = this.state.name;
        return name.length >= 3 && name.length <= 50;
    }

    /**
     * 
     * @param {String} email 
     */
    checkEmail() {
        const email = this.state.email;
        return email.length <= 50;
    }

    /**
     * 
     * @param {String} password 
     */
    checkPassword() {
        return this.state.password.length >= 6;
    }

    checkRepeatPassword() {
        return this.state.repeatPassword.localeCompare(this.state.password) === 0;
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
            <div className="signup-container">
                <form className="signup-form flexColumn" onSubmit={this.handleSubmit} spellCheck="false" autoComplete="off">
                    <h1 id="signup-title">CREATE ACCOUNT</h1>
                    <label>
                        <input
                            className="signup-input"
                            name="name"
                            type="text"
                            value={this.state.name}
                            placeholder="Your Name"
                            onChange={this.handleInputChange}
                            required />
                    </label>

                    <label>
                        <input
                            className="signup-input"
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Your Email"
                            onChange={this.handleInputChange}
                            required />
                    </label>

                    <label className="signup-password">
                        <input
                            className="signup-input"
                            name="password"
                            type={this.state.passwordShown ? 'text' : 'password'}
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            required />
                        <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={this.togglePasswordVisibility} />
                    </label>

                    <label className="signup-password">
                        <input
                            className="signup-input"
                            name="repeatPassword"
                            type={this.state.passwordShown ? 'text' : 'password'}
                            value={this.state.repeatPassword}
                            placeholder="Repeat your password"
                            onChange={this.handleInputChange}
                            required />
                        <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={this.togglePasswordVisibility} />
                    </label>

                    <label>
                        <input
                            className="signup-agreement"
                            name="termAgreement"
                            type="checkbox"
                            value={this.state.termAgreement}
                            onChange={this.handleInputChange}
                            required />
                        &nbsp; I agree all statements in &nbsp;
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">Terms of service</a>
                    </label>

                    <div className="signup-alert">{this.state.alertMessage}</div>

                    <input className="signup-submit" type="submit" value="SIGN UP" />

                    <div className="signup-redirect">
                        Have already an account ?
                        <button id="redirect-login">Login here</button>
                    </div>
                </form>
            </div>
        )
    }
}
