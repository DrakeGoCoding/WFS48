import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { createStudent, getSchool, getStudentById, updateStudent } from './axios'

export default function CreateStudentScreen() {
    const param = useParams()
    let history = useHistory()
    const [name, setName] = useState('')
    const [address, setAdress] = useState('')
    const [schoolId, setSchoolId] = useState('')
    const [schools, setSchools] = useState([])
    const [id, setId] = useState(param.id)

    useEffect(() => {
        if (id) {
            getStudentById(id).then(res => {
                let data = res.data
                setSchoolId(data.school ? data.school._id : null)
                setName(data.name)
                setAdress(data.address)
            })
        }
        getSchool().then(res => setSchools(res.data))
    }, [])

    const submit = () => {
        let body = {
            name,
            address,
            school: schoolId
        }
        createStudent(body).then(res => {
            history.push('/student-management')
        })
    }

    const update = () => {
        let body = {
            id: id,
            name,
            address,
            school: schoolId
        }
        updateStudent(body).then(res => {
            history.push('/student-management')
        })
    }

    const handleChange = (event) => {
        setSchoolId(event.target.value);
    }

    return (
        <div>
            <h1>{id ? 'Sửa học sinh' : 'Tạo học sinh'}</h1>
            <input placeholder="Nhập vào tên" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input placeholder="Nhập vào địa chỉ" value={address} onChange={(e) => setAdress(e.target.value)} />
            <br />
            <select value={schoolId} onChange={handleChange}>
                {schools.map((item, index) => {

                    return <option key={index} value={item._id}>{item.name}</option>
                })}
            </select>
            <br />
            <button onClick={id ? update : submit} >Submit</button>
        </div>
    )
}
