import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { createSchool } from './axios'

export default function CreateSchoolScreen() {
    let history = useHistory()
    const [name, setName] = useState('')

    const [address, setAdress] = useState('')

    const submit = () => {
        let body = {
            name,
            address
        }
        createSchool(body).then(res => {
            history.push('/school-management')
        })
    }

    return (
        <div>
            <h1>Tạo trường học</h1>
            <input placeholder="Nhập vào tên" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input placeholder="Nhập vào địa chỉ" value={address} onChange={(e) => setAdress(e.target.value)} />
            <button onClick={submit} >Submit</button>
        </div>
    )
}
