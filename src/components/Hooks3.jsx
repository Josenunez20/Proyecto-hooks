import React from 'react'
import { useEffect, useState } from 'react'

function Hooks3 () {
    const [stateCar, setStateCar] = useState (false);
    const [contar, setContar] = useState (0);

    useEffect (() => {
        console.log ("Total:" + contar);
        }, [contar])

    const Hooks3 = () => {
        setStateCar (!stateCar);
        setContar (contar + 1);
    };

    return (
        <>
            <h2>El coche esta: {stateCar ? "Encendido" : "Apagdo"}</h2>
            <h3>Clicks: {contar}</h3>
            <button onClick={Hooks3}>Encender / Apagar</button>
        </> 
    );
}

export default Hooks3;