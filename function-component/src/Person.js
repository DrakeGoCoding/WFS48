import React, { useState } from 'react'

export default function Person(props) {
    const item = props.item;
    const index = props.index;

    const [color, setColor] = useState('black');

    const changeColor = () => setColor(randomColor());

    return (
        <li style={{ color: color }}>
            <input
                type="checkbox"
                checked={props.listChecked.includes(index)}
                onChange={() => props.handleCheckBox(index)}>
            </input>
            {item.name}, {item.age}
            <button onClick={() => props.remove(index)}>Remove</button>
            <button onClick={() => changeColor(index)}>Change Color</button>
            <button onClick={() => props.edit(index)}>Edit</button>
        </li>
    )
}

function randomNum() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}
