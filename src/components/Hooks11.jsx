import React, {useState} from 'react';
import Child from './Child';

function Hooks11() {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState('');

    return (
        <div className='box'>   
            <h2>Hello from parent: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <Child counter= {counter} updateCounter={() => setCounter(counter +1)}/>
            <input type="text" onChange={e => setInput(e.target.value)} value={input} />
        </div>
    );
}

export default Hooks11;