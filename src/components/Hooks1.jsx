import React from 'react'
import { useState } from 'react'

const Hooks1 = () => {
    const [name, setName] = useState ('mario');
    const [age, setAge] = useState (25);

    const handleClick = () => {
        setName ('luigi');
        setAge ('30');
    }

    return (
        <div className="Hooks1">
            <h2>Ejemplo de useState</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Hooks1;