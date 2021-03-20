import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Main() {
    let history = useHistory();

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [color, setColor] = useState('black');
    const [listUser, setListUser] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentUserIndex, setCurrentUserIndex] = useState(null);

    const changeName = (event) => setName(event.target.value);
    const addAge = () => setAge(age + 1);
    const redirectAbout = () => history.push('/about');
    const submit = () => {
        let newUser = { name, age, color };
        setListUser([...listUser, newUser]);
        setName('');
        setAge(0);
        setColor('black');
    }

    useEffect(() => {
        console.log('First hello world');
    }, []);

    useEffect(() => {
        console.log('Age changed');
    }, [age]);

    const setRandomColor = (index) => {
        let newList = [...listUser];
        newList[index].color = randomColor();
        setListUser(newList);
    }

    const removeUser = (index) => {
        let newList = [...listUser];
        newList.splice(index, 1);
        setListUser(newList);
    }

    const editUser = (index) => {
        setEditMode(true);
        setCurrentUserIndex(index);
        setName(listUser[index].name);
        setAge(listUser[index].age);
        setColor(listUser[index].color);
    }

    const saveUser = () => {
        let newList = [...listUser];
        newList[currentUserIndex] = { name, age, color };
        setListUser(newList);
        cancelEdit();
    }

    const cancelEdit = () => {
        setEditMode(false);
        setName('');
        setAge(0);
        setColor('black');
        setCurrentUserIndex(null);
    }

    return (
        <div>
            Hello {name},
            Age {age} <br />
            <input type="text" value={name} onChange={changeName} />
            <button onClick={addAge}>Add age</button>
            <button onClick={redirectAbout}>Go About</button><br />
            <button onClick={editMode ? saveUser : submit}>{editMode ? 'Save' : 'Submit'}</button>
            {editMode ? <button onClick={cancelEdit}>Cancel</button> : null}
            <ul>
                {listUser.map((item, index) =>
                    <li key={index} style={{ color: listUser[index].color }}>
                        {item.name}, {item.age}
                        <button onClick={() => removeUser(index)}>Remove</button>
                        <button onClick={() => setRandomColor(index)}>Change Color</button>
                        <button onClick={() => editUser(index)}>Edit</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

function randomNum() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}