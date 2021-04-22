import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getSchools } from './Axios'

export default function SchoolViewer() {
    let location = useLocation()
    const [schools, setSchools] = useState([])

    useEffect(() => {
        getSchools()
            .then(res => setSchools(res.data))
            .catch(error => setSchools([]))
    }, [])

    const renderSchool = (item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
            </tr>
        )
    }

    return (
        <div className="flexColumn">
            <Link to="/">Main</Link>
            <Link to={location.pathname + '/create'}>Create a new school</Link>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map(renderSchool)}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
