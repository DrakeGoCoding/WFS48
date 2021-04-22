import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return (
        <div className="flexColumn">
            <Link to="/school-viewer">School Management</Link>
            <Link to="/student-viewer">Student Management</Link>
        </div>
    )
}
