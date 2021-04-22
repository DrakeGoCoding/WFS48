import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createSchool } from './Axios';

export default function SchoolCreator() {
    let history = useHistory();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const changeName = e => setName(e.target.value);
    const changeAddress = e => setAddress(e.target.value);

    const handleSubmit = () => {
        const newSchool = { name, address }
        createSchool(newSchool).then(res => history.push('/school-viewer'))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>New School</h1>
                <input type="text" placeholder="School name" value={name} onChange={changeName} required />
                <input type="text" placeholder="School address" value={address} onChange={changeAddress} required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
