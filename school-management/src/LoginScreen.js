import React, { useState } from 'react'
import { login } from './Axios'

export default function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const changeEmail = e => setEmail(e.target.value)
    const changePassword = e => setPassword(e.target.value)

    const loginRequest = async () => {
        try {
            const body = { email, password }
            const res = await login(body)
            props.setToken(res.data.accessToken)
        } catch (error) {
            setAlertMessage(error.response.data.error)
        }
    }

    return (
        <div>
            <input type="email" placeholder='Email' value={email} onChange={changeEmail} required />
            <input type="password" placeholder='Password' value={password} onChange={changePassword} required />
            <div style={{color: 'red'}}>{alertMessage}</div>
            <button onClick={loginRequest}>Login</button>
        </div>
    )
}
