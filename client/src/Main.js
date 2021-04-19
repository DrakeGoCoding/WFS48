import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';

export default function Main(props) {

    return (
        <div className='main'>
            <div className='flexRow'>
                <Link to="/school-management">  <img src='./download.png' /></Link>
                <Link to="/student-management">  <img src='./student-management.jpg' /></Link>
            </div>
        </div>
    )
}
// THêm 1 nút edit vào từng thẻ li
// khi bấm edit thì hiện tên tuổi lên trên ô nhập
// nút submit thành nút edit, xuất hiện thêm nút cancel
// bấm cancel thì nút edit lại trở thành nút submit, nút cancel mất đi
//bấm edit thì edit data, giữ nguyên thứ tự
