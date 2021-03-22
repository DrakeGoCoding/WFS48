import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Person from './Person'

export default function Main() {
    let history = useHistory();

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [color, setColor] = useState('black');
    const [listUser, setListUser] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [listChecked, setListChecked] = useState([]);

    const changeName = (e) => setName(e.target.value);
    const addAge = () => setAge(age + 1);
    const minusAge = () => setAge(age - 1);
    const redirectAbout = () => history.push('/about');

    const submit = () => {
        setListUser([...listUser, { name, age, color }]);
        setName('');
        setAge(0);
        setColor('black');
    }

    const remove = (index) => {
        let newList = [...listUser];
        newList.splice(index, 1);
        setListUser(newList);
    }

    const edit = (index) => {
        setEditIndex(index);
        setName(listUser[index].name);
        setAge(listUser[index].age);
        setColor(listUser[index].color);
    }

    const save = () => {
        let newList = [...listUser];
        newList[editIndex] = { name, age, color };
        setListUser(newList);
        cancelEdit();
    }

    const cancelEdit = () => {
        setEditIndex(null);
        setName('');
        setAge(0);
        setColor('black');
    }

    const handleCheckBox = (index) =>
        listChecked.includes(index)
            ? setListChecked([...listChecked.filter(item => item !== index)])
            : setListChecked([...listChecked, index]);

    const deleteAll = () => {
        setListUser([...listUser.filter((item, index) => !listChecked.includes(index))]);
        setListChecked([]);
    }

    // Run for the first time
    useEffect(() => {
        console.log('First hello world');
    }, []);

    // Listener for state <age>
    useEffect(() => {
        console.log('Age changed');
    }, [age]);

    return (
        <div>
            Hello {name},
            Age {age} <br />
            <input type="text" value={name} onChange={changeName} />
            <button onClick={addAge}>Add age</button>
            <button onClick={minusAge}>Minus age</button>
            {listChecked.length !== 0 ? <button onClick={deleteAll}>Delete All</button> : null}
            <button onClick={redirectAbout}>Go About</button><br />
            <button onClick={editIndex != null ? save : submit}>{editIndex != null ? 'Save' : 'Submit'}</button>
            {editIndex ? <button onClick={cancelEdit}>Cancel</button> : null}
            <ul>
                {listUser.map((item, index) =>
                    <Person
                        key={index.toString()}
                        index={index}
                        item={item}
                        listChecked={listChecked}
                        handleCheckBox={handleCheckBox}
                        remove={remove}
                        edit={edit} />
                )}
            </ul>
        </div>
    )
}