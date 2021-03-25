import { getPokemon } from './Axios';
import React, { useState } from 'react'

export default function Pokemon() {
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const changeName = e => setName(e.target.value);
    const fetchPokemon = () => {
        if (name) {
            setLoading(true);
            getPokemon(name).then(res => {
                setLoading(false);
                setData(res.data);
            }).catch(error => {
                setLoading(false);
                setData(null);
            })
        }
    }

    return (
        <div>
            <input type='text' value={name} onChange={changeName} />
            <button onClick={() => fetchPokemon()}>Search</button>
            { loading ? <div className="loader">Loading...</div> : data
                ?
                <div>
                    <p>Pokemon: {data.name}</p>
                    <p>Height: {data.height}m</p>
                    <p>Weight: {data.weight}kg</p>
                    <img src={data.sprites.other["official-artwork"].front_default} alt='Pokemon' />
                </div>
                : <div>Pokemon not found!</div>
            }
        </div>
    )
}
