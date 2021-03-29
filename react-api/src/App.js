import { getStudent } from './Axios'
import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getStudent().then(res => {
            setData(res.data);
        })
    }, [])

    const renderItem = (item, index) => {
        return (<div key={index.toString()}>
            <p>Name: {item.name}</p>
            <p>Address: {item.address}</p>
            <p>Class: {item.class}</p>
        </div>)
    }

    return (
        <div>
            <ul>
                {data ? data.map(renderItem) : null}
            </ul>
        </div>
    );
}

export default App;
