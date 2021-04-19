import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getSchool } from './axios'

export default function SchoolManagement() {
    const [schools, setSchools] = useState([])

    let location = useLocation()
    useEffect(() => {
        getSchool().then(res => {
            setSchools(res.data)
        })
    }, [])

    const renderItem = (item, index) => {
        return (<tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
        </tr>)
    }

    return (
        <div className="school">
            <Link to='/'>Trang chủ</Link>
            <br />
            <Link to={location.pathname + '/create'}>Tạo trường học</Link>
            <table >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map(renderItem)}
                </tbody>


            </table>

        </div>
    )
}
