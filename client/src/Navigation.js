import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route, useHistory, useParams
} from "react-router-dom";
import CreateSchoolScreen from "./CreateSchoolScreen";
import CreateStudentScreen from "./CreateStudentScreen";
import Main from "./Main";
import SchoolManagement from './SchoolManagement'
import StudentManagement from './StudentManagement'
export default function Navigation() {

    return (
        <Router>
            <Route exact path="/" component={Main} />
            <Route exact path="/student-management" component={StudentManagement} />
            <Route exact path="/student-management/create" component={CreateStudentScreen} />
            <Route exact path="/student-management/edit/:id" component={CreateStudentScreen} />
            <Route exact path="/school-management" component={SchoolManagement} />
            <Route exact path="/school-management/create" component={CreateSchoolScreen} />
        </Router>
    );
}

