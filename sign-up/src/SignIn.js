import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class SignIn extends Component {
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

    redirectSignUp = () => {
        this.props.history.push('/SignUp');
    }

    redirectMain = () => {
        this.props.history.push('/');
    }

    handleSubmit(event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('users'));
        const { email, password } = this.state;
        let found = users.find(user => user.email === email && user.password === password);
        if (found) {
            localStorage.setItem('currentUser', JSON.stringify({
                name: found.name,
                email: email,
                password: password
            }))
            this.redirectMain();
        }
        else this.setAlertMessage('Incorrect email or password.')
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
                    <h1 id="signin-title">LOG IN</h1>

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
                        <button id="redirect-signup" onClick={this.redirectSignUp}>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn);
