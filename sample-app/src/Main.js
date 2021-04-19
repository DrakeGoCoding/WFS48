import React from 'react';

export default function Main(props) {
    const redirectSignIn = () => {
        localStorage.removeItem('accessToken');
        props.setToken('');
    }

    return (
        <div>
            <button onClick={redirectSignIn}>Log Out</button>
        </div>
    )
}