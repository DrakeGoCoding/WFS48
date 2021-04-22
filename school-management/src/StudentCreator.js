import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createStudent, getSchools, getStudentByID, updateStudent } from './Axios';

export default function StudentCreator() {
    let history = useHistory();
    const param = useParams();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [schoolID, setSchoolID] = useState('')
    const [schools, setSchools] = useState([])
    // const [id, setID] = useState(param.id)
    const id = param.id

    const changeName = e => setName(e.target.value);
    const changeAddress = e => setAddress(e.target.value);
    const changeSchoolID = e => setSchoolID(e.target.value);

    useEffect(() => {
        if (id) {
            getStudentByID(id)
                .then(res => {
                    const data = res.data
                    setSchoolID(data.school ? data.school._id : null)
                    setName(data.name)
                    setAddress(data.address)
                })
        }
        getSchools().then(res => setSchools(res.data))
    })

    const handleEdit = () => {
        const student = { _id: id, name, address, school: schoolID }
        updateStudent(student).then(res => history.push('/student-viewer'))
    }

    const handleCreate = () => {
        const student = { name, address, school: schoolID }
        createStudent(student).then(res => history.push('/student-viewer'))
    }

    return (
        <div>
            <form onSubmit={id ? handleEdit : handleCreate}>
                <h1>{id ? 'Edit Student' : 'New Student'}</h1>
                <input type="text" placeholder="Name" value={name} onChange={changeName} required />
                <input type="text" placeholder="Address" value={address} onChange={changeAddress} required />
                <select value={schoolID} onChange={changeSchoolID}>
                    {
                        schools.map((item, index) =>
                            <option key={index} value={item._id}>{item.name}</option>
                        )
                    }
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
