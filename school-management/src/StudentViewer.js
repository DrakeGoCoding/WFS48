import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getStudents } from './Axios'

export default function StudentViewer() {
    let location = useLocation();
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
            .then(res => setStudents(res.data))
            .catch(error => setStudents([]))
    }, [])

    const renderStudent = (item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td><Link to={location.pathname + '/edit/' + item._id}>{item.name}</Link></td>
                <td>{item.address}</td>
                <td>{item.school ? item.school.name : 'N/A'}</td>
                <td>{item.class ? item.class.name : 'N/A'}</td>
            </tr>
        )
    }

    return (
        <div className="flexColumn">
            <Link to="/">Main</Link>
            <Link to={location.pathname + '/create'}>Create a new student</Link>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>School</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(renderStudent)}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
