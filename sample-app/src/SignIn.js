import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn } from './Axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function SignIn(props) {
    let history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const changeEmail = e => setEmail(e.target.value)
    const changePassword = e => setPassword(e.target.value)
    const togglePasswordVisibility = () => setPasswordShown(!passwordShown ? true : false)

    const handleSubmit = e => {
        e.preventDefault();
        const account = { email, password }
        signIn(account).then(res => {
            if (res.data.error) {
                setAlertMessage(res.data.error)
            } else {
                props.setToken(res.data.accessToken)
                redirectMain()
            }
        })
    }

    const redirectMain = () => history.push('/')
    const redirectSignUp = () => history.push('/SignUp')

    return (
        <div className="signin-container">
            <form className="signin-form flexColumn" onSubmit={handleSubmit} spellCheck="false" autoComplete="off">
                <h1 id="signin-title">LOG IN</h1>

                <label>
                    <input
                        className="signin-input"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={changeEmail}
                        required />
                </label>

                <label className="signin-password">
                    <input
                        className="signin-input"
                        name="password"
                        type={passwordShown ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={changePassword}
                        required />
                    <FontAwesomeIcon className="fa-icons" icon={faEye} onClick={togglePasswordVisibility} />
                </label>

                <div className="signin-alert">{alertMessage}</div>

                <input className="signin-submit" type="submit" value="SIGN IN" />

                <div className="signup-redirect">
                    Have not owned an account yet?
                        <button id="redirect-signup" onClick={redirectSignUp}>Register now</button>
                </div>
            </form>
        </div>
    )
}