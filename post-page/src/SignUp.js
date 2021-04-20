import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { signUp } from './Axios';

import './SignUp.css'

export default function SignUp(props) {
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const changeName = e => setName(e.target.value)
    const changeEmail = e => setEmail(e.target.value)
    const changePassword = e => setPassword(e.target.value)
    const changeRepeatPassword = e => setRepeatPassword(e.target.value)
    const togglePasswordVisibility = () => setPasswordShown(!passwordShown ? true : false)

    const redirectSignIn = () => history.push('/');

    const handleSubmit = e => {
        e.preventDefault();
        const newAccount = { name, email, password }
        checkInput() && signUp(newAccount)
            .then(res => res.data.error
                ? setAlertMessage(res.data.error)
                : redirectSignIn())
    }

    const checkInput = () => {
        if (!checkName()) {
            setAlertMessage('Your name should be 3-50 characters.');
            return false;
        }
        if (!checkEmail()) {
            setAlertMessage('Your email should be at most 50 characters.');
            return false;
        }
        if (!checkPassword()) {
            setAlertMessage('Your password should be at least 6 characters.');
            return false;
        }
        if (!checkRepeatPassword()) {
            setAlertMessage('Password mismatch');
            return false;
        }
        return true;
    }

    const checkName = () => name.length >= 3 && name.length <= 50
    const checkEmail = () => email.length <= 50
    const checkPassword = () => password.length >= 6
    const checkRepeatPassword = () => repeatPassword.localeCompare(password) === 0

    return (
        <div className="signup-container">
            <form className="signup-form flexColumn" onSubmit={handleSubmit} spellCheck="false" autoComplete="off">
                <h1 id="signup-title">SIGN UP</h1>
                <label>
                    <input
                        className="signup-input"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Your Name"
                        onChange={changeName}
                        required />
                </label>

                <label>
                    <input
                        className="signup-input"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={changeEmail}
                        required />
                </label>

                <label className="signup-password">
                    <input
                        className="signup-input"
                        name="password"
                        type={passwordShown ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={changePassword}
                        required />
                    <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={togglePasswordVisibility} />
                </label>

                <label className="signup-password">
                    <input
                        className="signup-input"
                        name="repeatPassword"
                        type={passwordShown ? 'text' : 'password'}
                        value={repeatPassword}
                        placeholder="Repeat your password"
                        onChange={changeRepeatPassword}
                        required />
                    <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={togglePasswordVisibility} />
                </label>

                <label>
                    <input
                        className="signup-agreement"
                        name="termAgreement"
                        type="checkbox"
                        required />
                        &nbsp; I agree all statements in &nbsp;
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">Terms of service</a>
                </label>

                <div className="signup-alert">{alertMessage}</div>

                <input className="signup-submit" type="submit" value="SIGN UP" />

                <div className="signup-redirect">
                    Have already an account ?
                    <button id="redirect-signin" onClick={redirectSignIn}>Login here</button>
                </div>
            </form>
        </div>
    )
}